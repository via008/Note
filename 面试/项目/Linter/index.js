class Reporter {
    issues = {
        error: {},
        warning: {},
        info: {}
    };

    report(id, message, level) {
        this.issues[level][id] = (this.issues[level][id] || []).push(message);
    }

    getIssues() {
        return this.issues;
    }
} 

function loadRule(config) {
    const rules = {};

    const shouldLint = Object.entries(config.rules).filter(([, level]) => level === 'error');

    for(const [rule, level] of shouldLint) {
        rules[rule] = {
            level,
            rule: require(`./${rule}`)
        }
    }

    return rules;
}

class Linter {
    constructor(config) {
        this.rules = loadRule(config);
    }

    async lint(schema) {
        const reporter = new Reporter();

        await this.validate(schema, reporter, schema);

        return reporter.getIssues();
    }

    async validate(schema, reporter, rootSchema) {
        const promises = [];

        for(let { rule, level } of Object.values(this.rules)) {
            promises.push(rule(schema, reporter, rootSchema));
        }

        if (schema.children?.length) {
            for(let child of schema.children) {
                promises.push(this.validate(child, reporter, rootSchema));
            }
        }

        await Promise.all(promises);
    }
}