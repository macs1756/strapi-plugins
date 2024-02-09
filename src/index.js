// @ts-nocheck
'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    // document.addEventListener('DOMContentLoaded', function() {
    //   document.addEventListener('strapi.notification.error', function(event) {
    //     if (event.detail && event.detail.id === 'notification.error.validation') {
    //       const errorMessage = event.detail.message;
    //       const fieldName = event.detail.fieldName;
    //       console.error('Validation error:', errorMessage);
    //       console.error('Field:', fieldName);
    //     }
    //   });
    // });

  },
};
