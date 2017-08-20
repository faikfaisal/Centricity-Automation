/// <reference path="../steps.d.ts" />
'use strict';
let I;
let properties = require("../properties");

module.exports = {

    _init() {
        I = actor();
    },

    title: { css: "#b1-Title" },
    chart: { css: "div[id*=chartcontainer]" },
    expandableTitle: { css: "div.section-expandable-title" },
    available: { css: "div.custom-tag-available-dash" },
    actionable: { css: "div.custom-tag-action-dash" },
    awaiting: { css: "div.custom-tag-await-dash" },


    ensureHomePageIsOpen() {
        I.waitForVisible(this.title, properties.timeout.LongWaitTimeout);
    },

    ensureJobsDashboardIsPresent() {
        this.ensureHomePageIsOpen();
        I.waitForText("actionable", properties.timeout.LongWaitTimeout, this.actionable);
        I.waitForText("awaiting", properties.timeout.LongWaitTimeout, this.awaiting);
    },

    clickExpandableTarget() {
        I.click(this.expandableTitle);
    },

    ensureExpandableTargetIsGone() {
        I.waitForInvisible(this.chart, properties.timeout.LongWaitTimeout);
    },

    ensureExpandableTargetIsPresent() {
        I.waitForVisible(this.chart, properties.timeout.LongWaitTimeout);
    }
}
