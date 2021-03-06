const common = require("../common/http-based/predefined-module");
const crudOps = require("../common/http-based/crud-operations");

module.exports = {
  ...common,
  key: "zoho_crm-new-or-updated-contact",
  name: "New or Updated Contact (Instant)",
  description: "Emits an event each time a new contact is created or updated in Zoho CRM",
  version: "0.0.1",
  methods: {
    ...common.methods,
    getModuleName() {
      return "Contact";
    },
    getSupportedOps() {
      return [
        crudOps.createOpData(),
        crudOps.editOpData(),
      ];
    },
  },
};
