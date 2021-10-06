import { contactForm } from './contact-form/index';
contactForm({
  formAction: 'https://mail.powerfulwebdesign.com.au/majestic.php', // production
  //formAction: 'http://127.0.0.1/mail.powerfulwebdesign.com.au/local.php', // local test
  grecaptchaKey: '6Lf-6QgbAAAAAPPzwbKCuusjNC-e17FP0SpwUhd6', // production
  //grecaptchaKey: '6LcTOs4aAAAAAN15ll0mreJjk457f7zvNmLOsfZS', // local test
  grecaptchaLocation: 'bottomright',
  // formId: 'js-contactForm',
  // inputNameId: 'js-contact-name',
  // submitId: 'js-submit',
  // statusId: 'js-statusMessage',
  // alertClass: 'alert', // BS5
  // successClass: 'alert-success', // BS5
  // errorClass: 'alert-danger', // BS5
  // hiddenClass: 'is-hidden', // custom css class dependency
  // spinnerId: 'js-load'
});
