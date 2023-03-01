const OPERATOR_TYPE = ['+', '-', '*', '/', '$formulaColSum'];
const SUM_OPERATOR_TYPE = '$formulaColSum';
// 变量占位值
const V_PLACEHOLDER = 'V_PLACEHOLDER';

const EXP = 'EXP';
const NUMBER = 'NUMBER';
const OPERATOR = 'operator';
const SUM_OPERATOR = 'sumOperator';
const VARIABLE = 'VARIABLE';
const VALUE = 'VALUE';

const OPEN_PAREN_CODE = '('; // (
const CLOSE_PAREN_CODE = ')'; // )
const SPACE_CODES = [32, 9, 10, 13]; // spaces

// 获取列表中所有项的最大长度
const getMaxLength = (list) => {
  let max = 0;
  list.forEach((item) => {
    max = Math.max(item.length, max);
  });
  return max;
};

export default class Reader {
  variableList = [];

  index = 0;

  linkList = null;

  maxVariableLength = 0;

  maxOperatorLength = 0;

  onErrorCallback = (e) => {
    console.error(e);
  };

  constructor(options = {}) {
    const { variableList = [] } = options;
    this.variableList = variableList.concat(V_PLACEHOLDER);
    this.maxVariableLength = getMaxLength(this.variableList);
    this.maxOperatorLength = getMaxLength(OPERATOR_TYPE);
  }

  reset() {
    this.index = 0;
    this.linkList = null;
  }

  fromExpression(expr) {
    if (!expr) {
      return null;
    }
    this.reset();
    if (typeof expr !== 'string') {
      throw new TypeError(`[expression] constructor need a string parameter, but get [${typeof expr}]`);
    }
    this.expr = expr;
    try {
      this.linkList = this._lexExpression();
    } catch (error) {
      this.onErrorCallback(error.message, this.index, this._charAt());
    }
    return this.linkList;
  }

  _lexExpression() {
    let head = [this._lexToken()];
    let curNode;

    while (this.index < this.expr.length) {
      curNode = this._lexToken();

      if (!curNode) {
        break;
      }
      head.push(curNode);
    }

    return head;
  }

  _lexToken() {
    this._lexSpaces();
    const char = this._charAt();

    // 变量
    if (this._isVariableBegin(char)) {
      return this._lexVariable();
    }
    // 数字
    if (this._isNumber(char)) {
      return this._lexNumber();
    }
    // 运算符
    if (this._isOperatorBegin(char)) {
      return this._lexBinaryOperator();
    }
    // 左括号
    if (this._isBracketsBegin(char)) {
      return this._lexBracketsBegin();
    }
    // 右括号
    if (this._isBracketsEnd(char)) {
      return this._lexBracketsEnd();
    }
    return null;
  }

  _lexSpaces() {
    let ch = this._charCodeAt();
    while (SPACE_CODES.includes(ch)) {
      this.index++;
      ch = this._charCodeAt();
    }
  }

  _lexValue() {
    let value = '';
    let closed = false;
    const quote = this._charAt(this.index++);
    while (this.index < this.expr.length) {
      let ch = this._charAt(this.index++);
      if (ch === quote) {
        closed = true;
        break;
      } else {
        value += ch;
      }
    }

    if (!closed) {
      throw new Error(`值'${value}'缺少结束引号`);
    }

    const valueNode = { type: VALUE, value };
    return valueNode;
  }

  // 处理数字
  _lexNumber() {
    const temp = { type: NUMBER, value: this.expr.substring(this.index, this.index + 1) };
    this.index ++;
    this._lexSpaces();
    return temp;
  }

  _lexVariable() {
    let temp = this.expr.substring(this.index, this.index + this.maxVariableLength);
    let tempLength = temp.length;
    while (tempLength) {
      if (this.variableList.includes(temp)) {
        this.index += tempLength;
        const result = { type: VARIABLE, value: temp };
        return result;
      }
      tempLength--;
      temp = temp.substring(0, tempLength);
    }

    throw new Error(`未注册的变量: ${temp}`);
  }

  _lexBinaryOperator() {
    this._lexSpaces();
    let temp = this.expr.substring(this.index, this.index + this.maxOperatorLength);
    let tempLength = temp.length;
    while (tempLength) {
      if (OPERATOR_TYPE.includes(temp)) {
        this.index += tempLength;
        const operatorNode = temp === SUM_OPERATOR_TYPE
          ? { type: SUM_OPERATOR, value: '∑' }
          : { type: OPERATOR, value: temp };
        return operatorNode;
      }
      tempLength--;
      temp = temp.substring(0, tempLength);
    }
    return null;
  }

  _lexBracketsBegin() {
    const temp = { type: EXP, value: '(' };
    this.index ++;
    this._lexSpaces();
    return temp;
  }

  _lexBracketsEnd() {
    const temp = { type: EXP, value: ')' };
    this.index ++;
    this._lexSpaces();
    return temp;
  }

  _isVariableBegin(ch) {
    return this.variableList.some((variable) => variable.startsWith(ch));
  }

  _isNumber(ch) {
    return Number.isFinite(Number(ch));
  }

  _isOperatorBegin(ch) {
    return OPERATOR_TYPE.some((operator) => operator.startsWith(ch));
  }

  _isBracketsBegin(ch) {
    return ch === OPEN_PAREN_CODE;
  }

  _isBracketsEnd(ch) {
    return ch === CLOSE_PAREN_CODE;
  }

  _charAt(index) {
    return this.expr.charAt(index || this.index);
  }

  _charCodeAt(index) {
    return this.expr.charCodeAt(index || this.index);
  }

  onError(callback) {
    this.onErrorCallback = callback;
    return this;
  }
}
