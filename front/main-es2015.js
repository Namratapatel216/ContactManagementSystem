(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" >\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/contact/contact.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/contact/contact.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper skin-blue\">\n  <header class=\"main-header\">\n    <a href=\"/Dashboard\" class=\"logo\">\n      <span class=\"logo-mini\"><b>A</b>LT</span>\n      <span class=\"logo-lg\"><b>Contact</b> Management</span>\n    </a>\n    <nav class=\"navbar navbar-static-top\">\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </a>\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\" style=\"width: auto !important;\">\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <aside class=\"main-sidebar\" style=\"overflow-y: auto !important;\">\n    <section class=\"sidebar\">\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" [(ngModel)]=\"SearchText\" id=\"txtSearch\" name=\"q\" class=\"form-control\"\n            placeholder=\"Search Contacts...\">\n          <span class=\"input-group-btn\">\n            <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n\n      <div class=\"user-panel\">\n      </div>\n\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">ALL CONTACTS</li>\n        <li *ngFor=\"let contacts_no of Contacts | filter : SearchText\" class=\"\"\n          [ngClass]=\"{'active': contacts_no.contactId == current_contactid}\">\n          <a href=\"javascript:void(0);\" (click)=\"get_perticular_contact_details(contacts_no.contactId)\">\n            <div class=\"user-panel\" *ngIf=\"contacts_no['image_name']; else notshow\">\n              <div class=\"pull-left image\">\n                <img src=\"\" id=\"attchament_img_display{{contacts_no['contactId']}}\" class=\"img-circle\" alt=\"User Image\">\n              </div>\n              <div class=\"pull-left info\">\n                <span>{{contacts_no['first_name']}} {{contacts_no['last_name']}}</span>\n              </div>\n            </div>\n            <ng-template #notshow>\n              <div class=\"user-panel\">\n                <div class=\"pull-left image\">\n                  <img [src]=getSantizeUrl(contacts_no.c_image_url)\n                    id=\"attchament_img_display{{contacts_no['contactId']}}\" class=\"img-circle image_path_null\"\n                    alt=\"User Image\">\n                </div>\n                <div class=\"pull-left info\">\n                  <span>{{contacts_no['first_name']}} {{contacts_no['last_name']}}</span>\n                </div>\n              </div>\n            </ng-template>\n          </a>\n        </li>\n      </ul>\n    </section>\n  </aside>\n  <div class=\"content-wrapper\">\n\n    <div class=\"btn-toolbar mb-2 mb-md-0\">\n      <div class=\"col-xs-12 col-md-12\" style=\"margin-top: 1% !important;margin-bottom: 1% !important;\">\n        <div class=\"col-xs-12 col-md-2 col-sm-12\" id=\"clear_filter_link\" style=\"display: none;\">\n          <input type=\"file\" name=\"import_contacts\" [(ngModel)]=\"import_contacts\" #c_attachments\n            (change)=\"OnFileSelected($event)\">\n          <img src=\"\" id=\"blah\" style=\"display:none;height:100px;width:100px;\">\n        </div>\n        <a href=\"javascript:void(0)\" (click)=\"c_attachments.click()\" id=\"import_contacts_data_id\"\n          class=\"btn btn-sm btn-info btn-flat pull-right\">Import Contacts</a>\n      </div>\n    </div>\n    <!-- <section class=\"content-header\" *ngIf=\"current_contactid\">\n        <h1>\n          {{particular_issue_info.fullname}}\n        </h1>\n      </section> -->\n    <section class=\"content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"current_contactid; else notshow_default\">\n          <div class=\"box box-primary\">\n            <div class=\"box-body pad table-responsive\">\n\n              <h2><span><b>{{particular_issue_info.fullname}}</b></span></h2>\n\n              <div class=\"col-md-6 issue_detail_section\">\n                <h6><span><b>Contact Details</b></span></h6>\n                <table class=\"table text-left\">\n                  <tr>\n                    <td>First Name</td>\n                    <td (mouseover)=\"field_mouse_hover('fname_edit_icon','fname_ad_un')\" (mouseout)=\"field_mouse_out('fname_edit_icon','fname_ad_un')\">\n\n                      <div id=\"main_hover_fname\" style=\"display: block;\"> \n                        <div class=\"input-group\">\n                          <input class=\"form-control hover_input fname_ad_un\" type=\"text\" name=\"first_name\"\n                            [(ngModel)]=\"particular_issue_info.first_name\" id=\"fname_ad_un\" readonly>\n                          <span class=\"input-group-addon\">\n                            <i id=\"fname_edit_icon\" class=\"fa fa-pencil fa-1\" aria-hidden=\"true\" style=\"display:none;cursor: pointer;\" (click)=\"open_ok_cancel_btn('main_hover_fname','fname_click_input','fname_ok_cancel_btn','fname_edit_icon')\"></i>\n                          </span>\n                        </div>\n                      </div>\n\n                      <div id=\"fname_click_input\" style=\"display: none;\">\n                        <div class=\"inner-addon right-addon\">\n                          <input class=\"form-control hover_input\" type=\"text\" name=\"first_name\"\n                            [(ngModel)]=\"particular_issue_info.first_name\" id=\"fname_ad_un\" (click)=\"open_ok_cancel_btn('main_hover_fname','fname_click_input','fname_ok_cancel_btn','fname_edit_icon')\">\n                        </div>\n                      </div>\n\n                      <div class=\"title_ok_cancel_btn\" id=\"fname_ok_cancel_btn\" style=\"display: none;\">\n                        <button class=\"btn ok_btn\" (click)=\"update_fname()\">&#10004;</button>\n                        <button class=\"btn cancel_btn\" (click)=\"remove_field('first_name','fname_ok_cancel_btn','main_hover_fname','fname_click_input')\">&#10008;</button>\n                      </div>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Last Name</td>\n                    <td (mouseover)=\"field_mouse_hover('lname_edit_icon','lname_ad_un')\" (mouseout)=\"field_mouse_out('lname_edit_icon','lname_ad_un')\">\n                      \n                      <div id=\"main_hover_lname\" style=\"display: block;\"> \n                        <div class=\"input-group\">\n                          <input class=\"form-control hover_input lname_ad_un\" type=\"text\" name=\"last_name\"\n                            [(ngModel)]=\"particular_issue_info.last_name\" id=\"lname_ad_un\" readonly>\n                          <span class=\"input-group-addon\">\n                            <i id=\"lname_edit_icon\" class=\"fa fa-pencil fa-1\" aria-hidden=\"true\" style=\"display:none;cursor: pointer;\" (click)=\"open_ok_cancel_btn('main_hover_lname','lname_click_input','lname_ok_cancel_btn','lname_edit_icon')\"></i>\n                          </span>\n                        </div>\n                      </div>\n\n                      <div id=\"lname_click_input\" style=\"display: none;\">\n                        <div class=\"inner-addon right-addon\">\n                          <input class=\"form-control hover_input\" type=\"text\" name=\"last_name\"\n                            [(ngModel)]=\"particular_issue_info.last_name\" id=\"lname_ad_un\" (click)=\"open_ok_cancel_btn('main_hover_lname','lname_click_input','lname_ok_cancel_btn','lname_edit_icon')\">\n                        </div>\n                      </div>\n\n                      <div class=\"title_ok_cancel_btn\" id=\"lname_ok_cancel_btn\" style=\"display: none;\">\n                        <button class=\"btn ok_btn\" (click)=\"update_lname()\">&#10004;</button>\n                        <button class=\"btn cancel_btn\" (click)=\"remove_field('last_name','lname_ok_cancel_btn','main_hover_lname','lname_click_input')\">&#10008;</button>\n                      </div>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Nick Name</td>\n                    <td>\n                      {{particular_issue_info.nick_name}}\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td>Email Address</td>\n                    <td (mouseover)=\"field_mouse_hover('email_address_edit_icon','email_ad_un')\" (mouseout)=\"field_mouse_out('email_address_edit_icon','email_ad_un')\">\n\n                      <div id=\"main_hover_email\" style=\"display: block;\"> \n                        <div class=\"input-group\">\n                          <input class=\"form-control hover_input email_ad_un\" type=\"text\" name=\"email_address1\"\n                            [(ngModel)]=\"particular_issue_info.email_address\" id=\"email_ad_un\" readonly>\n                          <span class=\"input-group-addon\">\n                            <i id=\"email_address_edit_icon\" class=\"fa fa-pencil fa-1\" aria-hidden=\"true\" style=\"display:none;cursor: pointer;\" (click)=\"open_ok_cancel_btn('main_hover_email','main_click_email','email_ok_cancel_btn','email_address_edit_icon')\"></i>\n                          </span>\n                        </div>\n                      </div>\n\n                      <div id=\"main_click_email\" style=\"display: none;\">\n                        <div class=\"inner-addon right-addon\">\n                          <input class=\"form-control hover_input\" type=\"text\" name=\"email_address\"\n                            [(ngModel)]=\"particular_issue_info.email_address\" id=\"email_ad_un\" (click)=\"open_ok_cancel_btn('main_hover_email','main_click_email','email_ok_cancel_btn','email_address_edit_icon')\">\n                        </div>\n                      </div>\n\n                      <div class=\"title_ok_cancel_btn\" id=\"email_ok_cancel_btn\" style=\"display: none;\">\n                        <button class=\"btn ok_btn\" (click)=\"update_email_address()\">&#10004;</button>\n                        <button class=\"btn cancel_btn\" (click)=\"remove_field('email_address','email_ok_cancel_btn','main_hover_email','main_click_email')\">&#10008;</button>\n                      </div>\n\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td>Email Address2</td>\n                    <td>{{particular_issue_info.email_address2}}</td>\n                  </tr>\n                  <tr>\n                    <td>Email Address3</td>\n                    <td>\n                      {{particular_issue_info.email_address3}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Related Name</td>\n                    <td>\n                      {{particular_issue_info.related_name}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Anniversary</td>\n                    <td>\n                      {{particular_issue_info.anniversary}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business Address</td>\n                    <td>\n                      {{particular_issue_info.business_address}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business Address2</td>\n                    <td>\n                      {{particular_issue_info.business_address_2}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business Phone</td>\n                    <td>\n                      {{particular_issue_info.business_phone}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>business Fax</td>\n                    <td>\n                      {{particular_issue_info.business_fax}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business Postal Code</td>\n                    <td>\n                      {{particular_issue_info.business_postal_code}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business City</td>\n                    <td>\n                      {{particular_issue_info.business_city}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business State</td>\n                    <td>\n                      {{particular_issue_info.business_state}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Business Country</td>\n                    <td>\n                      {{particular_issue_info.business_country}}\n                    </td>\n                  </tr>\n                </table>\n              </div>\n\n              <div class=\"col-md-5 issue_people_section\">\n                <h6><span><b>Address Details</b></span></h6>\n                <table class=\"table text-left content_table\">\n                  <tr>\n                    <td>Organization</td>\n                    <td>\n                      {{particular_issue_info.organization}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Phone</td>\n                    <td (mouseover)=\"field_mouse_hover('home_phone_edit_icon','home_phone_ad_un')\" (mouseout)=\"field_mouse_out('home_phone_edit_icon','home_phone_ad_un')\">\n\n                      <div id=\"main_hover_home_phone\" style=\"display: block;\"> \n                        <div class=\"input-group\">\n                          <input class=\"form-control hover_input home_phone_ad_un\" type=\"text\" name=\"home_phone\"\n                            [(ngModel)]=\"particular_issue_info.home_phone\" id=\"home_phone_ad_un\" readonly>\n                          <span class=\"input-group-addon\">\n                            <i id=\"home_phone_edit_icon\" class=\"fa fa-pencil fa-1\" aria-hidden=\"true\" style=\"display:none;cursor: pointer;\" (click)=\"open_ok_cancel_btn('main_hover_home_phone','main_click_home_phone','home_phone_ok_cancel_btn','home_phone_edit_icon')\"></i>\n                          </span>\n                        </div>\n                      </div>\n\n                      <div id=\"main_click_home_phone\" style=\"display: none;\">\n                        <div class=\"inner-addon right-addon\">\n                          <input class=\"form-control hover_input\" type=\"text\" name=\"home_phone\"\n                            [(ngModel)]=\"particular_issue_info.home_phone\" id=\"home_phone_ad_un\" (click)=\"open_ok_cancel_btn('main_hover_home_phone','main_click_home_phone','home_phone_ok_cancel_btn','home_phone_edit_icon')\">\n                        </div>\n                      </div>\n\n                      <div class=\"title_ok_cancel_btn\" id=\"home_phone_ok_cancel_btn\" style=\"display: none;\">\n                        <button class=\"btn ok_btn\" (click)=\"update_home_phone()\">&#10004;</button>\n                        <button class=\"btn cancel_btn\" (click)=\"remove_field('home_phone','home_phone_ok_cancel_btn','main_hover_home_phone','main_click_home_phone')\">&#10008;</button>\n                      </div>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Mobile Phone</td>\n                    <td (mouseover)=\"field_mouse_hover('mobile_phone_edit_icon','mobile_phone_ad_un')\" (mouseout)=\"field_mouse_out('mobile_phone_edit_icon','mobile_phone_ad_un')\">\n\n                      <div id=\"main_hover_mobile_phone\" style=\"display: block;\"> \n                        <div class=\"input-group\">\n                          <input class=\"form-control hover_input mobile_phone_ad_un\" type=\"text\" name=\"mobile_phone\"\n                            [(ngModel)]=\"particular_issue_info.mobile_phone\" id=\"mobile_phone_ad_un\" readonly>\n                          <span class=\"input-group-addon\">\n                            <i id=\"mobile_phone_edit_icon\" class=\"fa fa-pencil fa-1\" aria-hidden=\"true\" style=\"display:none;cursor: pointer;\" (click)=\"open_ok_cancel_btn('main_hover_mobile_phone','main_click_mobile_phone','mobile_phone_ok_cancel_btn','mobile_phone_edit_icon')\"></i>\n                          </span>\n                        </div>\n                      </div>\n\n                      <div id=\"main_click_mobile_phone\" style=\"display: none;\">\n                        <div class=\"inner-addon right-addon\">\n                          <input class=\"form-control hover_input\" type=\"text\" name=\"mobile_phone\"\n                            [(ngModel)]=\"particular_issue_info.mobile_phone\" id=\"mobile_phone_ad_un\" (click)=\"open_ok_cancel_btn('main_hover_mobile_phone','main_click_mobile_phone','mobile_phone_ok_cancel_btn','mobile_phone_edit_icon')\">\n                        </div>\n                      </div>\n\n                      <div class=\"title_ok_cancel_btn\" id=\"mobile_phone_ok_cancel_btn\" style=\"display: none;\">\n                        <button class=\"btn ok_btn\" (click)=\"update_mobile_phone()\">&#10004;</button>\n                        <button class=\"btn cancel_btn\" (click)=\"remove_field('mobile_phone','mobile_phone_ok_cancel_btn','main_hover_mobile_phone','main_click_mobile_phone')\">&#10008;</button>\n                      </div>\n\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Street</td>\n                    <td>\n                      {{particular_issue_info.home_street}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Address2</td>\n                    <td>\n                      {{particular_issue_info.home_address_2}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Postal Code</td>\n                    <td>\n                      {{particular_issue_info.home_postal_code}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Fax</td>\n                    <td>\n                      {{particular_issue_info.home_fax}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home City</td>\n                    <td>\n                      {{particular_issue_info.home_city}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home State</td>\n                    <td>\n                      {{particular_issue_info.home_state}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Home Country</td>\n                    <td>\n                      {{particular_issue_info.home_country}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Webpage</td>\n                    <td>\n                      {{particular_issue_info.web_page}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Webpage2</td>\n                    <td>\n                      {{particular_issue_info.webpage_2}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Job Title</td>\n                    <td>\n                      {{particular_issue_info.job_title}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Country Code</td>\n                    <td>\n                      {{particular_issue_info.country_code}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Notes</td>\n                    <td>\n                      {{particular_issue_info.notes}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Gender</td>\n                    <td>\n                      {{particular_issue_info.gender}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Pager</td>\n                    <td>\n                      {{particular_issue_info.pager}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Categories</td>\n                    <td>\n                      {{particular_issue_info.categories}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Department</td>\n                    <td>\n                      {{particular_issue_info.department}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Display Name</td>\n                    <td>\n                      {{particular_issue_info.display_name}}\n                    </td>\n                  </tr>\n                </table>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <ng-template #notshow_default>\n          <div class=\"col-md-12\" style=\"vertical-align: middle;text-align: center !important;\">\n            Click On Contacts To View Their Contact\n          </div>\n        </ng-template>\n      </div>\n    </section>\n\n  </div>\n\n  <footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 2.4.13\n    </div>\n    <strong>Copyright &copy; 2014-2019 <a href=\"https://adminlte.io\">AdminLTE</a>.</strong> All rights\n    reserved.\n  </footer>\n\n  <!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    <div class=\"tab-content\">\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n        </form>\n      </div>\n    </div>\n  </aside>\n  <div class=\"control-sidebar-bg\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper skin-blue\">\n    <header class=\"main-header\">\n      <a href=\"/Dashboard\" class=\"logo\">\n        <span class=\"logo-mini\"><b>A</b>LT</span>\n        <span class=\"logo-lg\"><b>Contact</b>  Management</span>\n      </a>\n      <nav class=\"navbar navbar-static-top\">\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </a>\n        <div class=\"navbar-custom-menu\">\n          <ul class=\"nav navbar-nav\" style=\"width: auto !important;\">\n          </ul>\n        </div>\n      </nav>\n    </header>\n    <aside class=\"main-sidebar\" style=\"overflow-y: auto !important;\">\n      <section class=\"sidebar\">\n        <!-- search form -->\n        <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n          <div class=\"input-group\">\n            <input type=\"text\" [(ngModel)]=\"SearchText\" id=\"txtSearch\" name=\"q\" class=\"form-control\" placeholder=\"Search Contacts...\">\n            <span class=\"input-group-btn\">\n                  <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                    <i class=\"fa fa-search\"></i>\n                  </button>\n                </span>\n          </div>\n        </form>\n        <!-- /.search form -->\n\n        <div class=\"user-panel\">\n        </div>\n\n        <ul class=\"sidebar-menu\" data-widget=\"tree\" >\n          <li class=\"header\">ALL CONTACTS</li>\n          <li *ngFor=\"let contacts_no of Contacts | filter : SearchText\" class=\"\" [ngClass]=\"{'active': contacts_no.contactId == current_contactid}\">\n            <a href=\"javascript:void(0);\" id=\"{{contacts_no.contactId}}\" [routerLink]=\"['/Contact',contacts_no.contactId]\">\n              <div class=\"user-panel\" *ngIf=\"contacts_no['image_name']; else notshow\">\n                <div class=\"pull-left image\" >\n                  <img src=\"\" id=\"attchament_img_display{{contacts_no['contactId']}}\" class=\"img-circle\" alt=\"User Image\">\n                </div>\n                <div class=\"pull-left info\">\n                  <span>{{contacts_no['first_name']}} {{contacts_no['last_name']}}</span>\n                </div>\n              </div>\n              <ng-template #notshow>\n                <div class=\"user-panel\">\n                  <div class=\"pull-left image\" >\n                    <img [src]=getSantizeUrl(contacts_no.c_image_url) id=\"attchament_img_display{{contacts_no['contactId']}}\" class=\"img-circle image_path_null\" alt=\"User Image\">\n                  </div>\n                  <div class=\"pull-left info\">\n                    <span>{{contacts_no['first_name']}} {{contacts_no['last_name']}}</span>\n                  </div>\n                </div>\n              </ng-template>\n            </a>\n          </li>\n        </ul>\n      </section>\n    </aside>\n    <div class=\"content-wrapper\">\n\n      <div class=\"btn-toolbar mb-2 mb-md-0\">\n        <div class=\"col-xs-12 col-md-12\" style=\"margin-top: 1% !important;margin-bottom: 1% !important;\">\n          \n        </div>\n      </div>\n\n      <section class=\"content\" style=\"text-align: center;\">\n        <div class=\"row\"  style=\"vertical-align: middle;\">\n          <div class=\"col-md-12\" style=\"vertical-align: middle;\">\n              Click On Contacts To View Their Contact\n          </div>\n        </div>\n      </section>\n      \n    </div>\n    \n    <footer class=\"main-footer\">\n      <div class=\"pull-right hidden-xs\">\n        <b>Version</b> 2.4.13\n      </div>\n      <strong>Copyright &copy; 2014-2019 <a href=\"https://adminlte.io\">AdminLTE</a>.</strong> All rights\n      reserved.\n    </footer>\n\n    <!-- Control Sidebar -->\n    <aside class=\"control-sidebar control-sidebar-dark\">\n      <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n        <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n        <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n      </ul>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n          <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n          <ul class=\"control-sidebar-menu\">\n            <li>\n              <a href=\"javascript:void(0)\">\n                <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n                <div class=\"menu-info\">\n                  <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n                  <p>Will be 23 on April 24th</p>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n                <div class=\"menu-info\">\n                  <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n                  <p>New phone +1(800)555-1234</p>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n                <div class=\"menu-info\">\n                  <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n                  <p>nora@example.com</p>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n                <div class=\"menu-info\">\n                  <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n                  <p>Execution time 5 seconds</p>\n                </div>\n              </a>\n            </li>\n          </ul>\n          <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n          <ul class=\"control-sidebar-menu\">\n            <li>\n              <a href=\"javascript:void(0)\">\n                <h4 class=\"control-sidebar-subheading\">\n                  Custom Template Design\n                  <span class=\"label label-danger pull-right\">70%</span>\n                </h4>\n                <div class=\"progress progress-xxs\">\n                  <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <h4 class=\"control-sidebar-subheading\">\n                  Update Resume\n                  <span class=\"label label-success pull-right\">95%</span>\n                </h4>\n                <div class=\"progress progress-xxs\">\n                  <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <h4 class=\"control-sidebar-subheading\">\n                  Laravel Integration\n                  <span class=\"label label-warning pull-right\">50%</span>\n                </h4>\n                <div class=\"progress progress-xxs\">\n                  <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n                </div>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0)\">\n                <h4 class=\"control-sidebar-subheading\">\n                  Back End Framework\n                  <span class=\"label label-primary pull-right\">68%</span>\n                </h4>\n                <div class=\"progress progress-xxs\">\n                  <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n        <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n          <form method=\"post\">\n            <h3 class=\"control-sidebar-heading\">General Settings</h3>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Report panel usage\n                <input type=\"checkbox\" class=\"pull-right\" checked>\n              </label>\n              <p>\n                Some information about this general settings option\n              </p>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Allow mail redirect\n                <input type=\"checkbox\" class=\"pull-right\" checked>\n              </label>\n              <p>\n                Other sets of options are available\n              </p>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Expose author name in posts\n                <input type=\"checkbox\" class=\"pull-right\" checked>\n              </label>\n              <p>\n                Allow the user to show his name in blog posts\n              </p>\n            </div>\n            <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Show me as online\n                <input type=\"checkbox\" class=\"pull-right\" checked>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Turn off notifications\n                <input type=\"checkbox\" class=\"pull-right\">\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n                Delete chat history\n                <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n              </label>\n            </div>\n          </form>\n        </div>\n      </div>\n    </aside>\n    <div class=\"control-sidebar-bg\"></div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/SafePipe.ts":
/*!*****************************!*\
  !*** ./src/app/SafePipe.ts ***!
  \*****************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _dashboard_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/contact/contact.component */ "./src/app/dashboard/contact/contact.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'Dashboard', component: _dashboard_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
                { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
                { path: '*', component: _dashboard_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
                { path: '**', component: _dashboard_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/contact/contact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th{\r\n    padding: 1% !important;\r\n}\r\ntd{\r\n    padding: 1% !important;\r\n}\r\n.nsm-dialog.modal {\r\n    width: 100% !important;\r\n    height: 50vh;\r\n}\r\n.title_ok_cancel_btn{\r\n    width: auto;\r\n    float: right;\r\n}\r\n.input-icons i { \r\n    position: absolute; \r\n}\r\n.input-icons { \r\n    width: 100%; \r\n    margin-bottom: 10px; \r\n}\r\n.icon { \r\n    padding: 10px; \r\n    min-width: 40px; \r\n}\r\n.input-field { \r\n    width: 100%; \r\n    padding: 10px; \r\n    text-align: center; \r\n}\r\n.issue_detail_section h6 \r\n{   \r\n    width:100%; text-align:left; border-bottom: 1px solid lightgray; line-height:0.1em; margin:10px 0 20px 0; \r\n}\r\n.issue_detail_section h6 span \r\n{\r\n    background:#fff; padding:0 10px; \r\n}\r\n.issue_people_section h6\r\n{   \r\n    width:100%; text-align:left; border-bottom: 1px solid lightgray; line-height:0.1em; margin:10px 0 20px 0; \r\n}\r\n.issue_people_section h6 span \r\n{\r\n    background:#fff; padding:0 10px; \r\n}\r\n.nsm-content{\r\n    max-width: none !important;\r\n}\r\n.cretae_issue_header{\r\n    border-bottom: #f2f2f2 !important;\r\n    text-align: center !important;\r\n}\r\nhr{\r\n    border-color: #f2f2f2 !important;\r\n}\r\n.sidebar-menu > li > a\r\n{\r\n    padding : 0px !important;\r\n}\r\nbody {\r\n    overflow-y: hidden !important;\r\n}\r\n.wrapper {\r\n    overflow-y: hidden !important;\r\n}\r\n.msg-modal { width: 75%; max-width: none; border-radius: 10px; padding: 12px 0 0 0; }\r\n.loader {\r\n    position:fixed;\r\n    width:100%;\r\n    left:0;right:0;top:0;bottom:0;\r\n    background-color: rgba(255,255,255,0.7);\r\n    z-index:9999;\r\n    display:none;\r\n}\r\n.ngx-pagination{\r\n    margin-top:2% !important;\r\n}\r\n#loader::after {\r\ncontent:'';\r\ndisplay:block;\r\nposition:absolute;\r\nleft:48%;top:40%;\r\nwidth:40px;height:40px;\r\nborder-style:solid;\r\nborder-color:black;\r\nborder-top-color:transparent;\r\nborder-width: 4px;\r\nborder-radius:50%;\r\n-webkit-animation: spin .8s linear infinite;\r\nanimation: spin .8s linear infinite;\r\n}\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n0% { -webkit-transform: rotate(0deg); }\r\n100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\ntable tr td a {\r\n    display: block;\r\n}\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxVQUFVLEVBQUUsZUFBZSxFQUFFLGtDQUFrQyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQjtBQUM1RztBQUNBOztJQUVJLGVBQWUsRUFBRSxjQUFjO0FBQ25DO0FBQ0E7O0lBRUksVUFBVSxFQUFFLGVBQWUsRUFBRSxrQ0FBa0MsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0I7QUFDNUc7QUFDQTs7SUFFSSxlQUFlLEVBQUUsY0FBYztBQUNuQztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUEsYUFBYSxVQUFVLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFO0FBQ3BGO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQzdCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixRQUFRLENBQUMsT0FBTztBQUNoQixVQUFVLENBQUMsV0FBVztBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQyxtQ0FBbUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLLCtCQUErQixFQUFFO0FBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0FBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XHJcbiAgICBwYWRkaW5nOiAxJSAhaW1wb3J0YW50O1xyXG59XHJcbnRke1xyXG4gICAgcGFkZGluZzogMSUgIWltcG9ydGFudDtcclxufVxyXG4ubnNtLWRpYWxvZy5tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi50aXRsZV9va19jYW5jZWxfYnRue1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29ucyBpIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG4gIFxyXG4uaW5wdXQtaWNvbnMgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG59IFxyXG4gIFxyXG4uaWNvbiB7IFxyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICBtaW4td2lkdGg6IDQwcHg7IFxyXG59IFxyXG4gIFxyXG4uaW5wdXQtZmllbGQgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSBcclxuXHJcbi5pc3N1ZV9kZXRhaWxfc2VjdGlvbiBoNiBcclxueyAgIFxyXG4gICAgd2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpsZWZ0OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyBsaW5lLWhlaWdodDowLjFlbTsgbWFyZ2luOjEwcHggMCAyMHB4IDA7IFxyXG59IFxyXG4uaXNzdWVfZGV0YWlsX3NlY3Rpb24gaDYgc3BhbiBcclxue1xyXG4gICAgYmFja2dyb3VuZDojZmZmOyBwYWRkaW5nOjAgMTBweDsgXHJcbn1cclxuLmlzc3VlX3Blb3BsZV9zZWN0aW9uIGg2XHJcbnsgICBcclxuICAgIHdpZHRoOjEwMCU7IHRleHQtYWxpZ246bGVmdDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgbGluZS1oZWlnaHQ6MC4xZW07IG1hcmdpbjoxMHB4IDAgMjBweCAwOyBcclxufSBcclxuLmlzc3VlX3Blb3BsZV9zZWN0aW9uIGg2IHNwYW4gXHJcbntcclxuICAgIGJhY2tncm91bmQ6I2ZmZjsgcGFkZGluZzowIDEwcHg7IFxyXG59XHJcblxyXG4ubnNtLWNvbnRlbnR7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uY3JldGFlX2lzc3VlX2hlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206ICNmMmYyZjIgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbmhye1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZGViYXItbWVudSA+IGxpID4gYVxyXG57XHJcbiAgICBwYWRkaW5nIDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXNnLW1vZGFsIHsgd2lkdGg6IDc1JTsgbWF4LXdpZHRoOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiAxMnB4IDAgMCAwOyB9XHJcbi5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgICB6LWluZGV4Ojk5OTk7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn0gIFxyXG4ubmd4LXBhZ2luYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOjIlICFpbXBvcnRhbnQ7XHJcbn1cclxuI2xvYWRlcjo6YWZ0ZXIge1xyXG5jb250ZW50OicnO1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxubGVmdDo0OCU7dG9wOjQwJTtcclxud2lkdGg6NDBweDtoZWlnaHQ6NDBweDtcclxuYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG5ib3JkZXItY29sb3I6YmxhY2s7XHJcbmJvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbmJvcmRlci13aWR0aDogNHB4O1xyXG5ib3JkZXItcmFkaXVzOjUwJTtcclxuLXdlYmtpdC1hbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLyogU2FmYXJpICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbjEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4wJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbjEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxudGFibGUgdHIgdGQgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgLmNvbC14cy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wIDogMiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGEuYnRuLmJ0bi1kZWZhdWx0LmJ0bi1mbGF0LlVzZXItcHJvZmlsZS1idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb2wteHMtMTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi5idG4tZGVmYXVsdC5idG4tZmxhdC5Vc2VyLXByb2ZpbGUtYnRuIHtcclxuICAgICAgICBjb2xvcjogIzNjOGRiYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29sLXhzLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYS5idG4uYnRuLWRlZmF1bHQuYnRuLWZsYXQuVXNlci1wcm9maWxlLWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICMzYzhkYmMgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_socket_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket-contact.service */ "./src/app/socket-contact.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");








let dbx = new dropbox__WEBPACK_IMPORTED_MODULE_5__["Dropbox"]({ accessToken: '8OFJNocMFEAAAAAAAAAAhPJetJappwjmhdqNUT5izThN7PRcKdTA27CM6kt3-r_n', fetch: fetch });
let ContactComponent = class ContactComponent {
    constructor(toastr, domSanitizer, _router, socket_service) {
        this.toastr = toastr;
        this.domSanitizer = domSanitizer;
        this._router = _router;
        this.socket_service = socket_service;
        this.import_contacts = null;
        this.Contacts = [];
        this.counter = 0;
        this.particular_issue_info = {};
        this.getAllContacts = (default_image_url_passed) => {
            this.Contacts = [];
            this.socket_service.get_all_contacts().subscribe((apiResponse) => {
                for (let x_contacts of apiResponse['data']) {
                    var c_image_url;
                    this.counter++;
                    if (x_contacts['image'] != null) {
                        var file_ext1 = x_contacts['image'].split('.').pop();
                        var file_ext = file_ext1.toLowerCase();
                        if (file_ext == 'bmp' || file_ext == 'gif' || file_ext == 'ico' || file_ext == 'jpeg' || file_ext == 'jpg' || file_ext == 'png' || file_ext == 'svg' || file_ext == 'tiff' || file_ext == 'tif' || file_ext == 'webp') {
                            dbx.filesGetThumbnail({
                                "path": `/contact_Manage/${x_contacts['image']}`, format: { '.tag': 'jpeg' },
                                size: { '.tag': 'w480h320' },
                                mode: { '.tag': 'strict' }
                            })
                                .then(function (response) {
                                var fileUrl = URL.createObjectURL(response['fileBlob']);
                                getUrl(fileUrl, x_contacts['contactId']);
                            })
                                .catch(function (error) {
                            });
                        }
                    }
                    else {
                        var default_url = default_image_url_passed;
                    }
                    let getUrl = (url_of_img, contactid) => {
                        c_image_url = url_of_img;
                        jquery__WEBPACK_IMPORTED_MODULE_4__('#attchament_img_display' + contactid).attr('src', url_of_img);
                    };
                    this.Contacts = [
                        ...this.Contacts,
                        {
                            counter: this.counter,
                            contactId: x_contacts['contactId'],
                            email_address: x_contacts['email_address'],
                            related_name: x_contacts['related_name'],
                            home_address_2: x_contacts['home_address_2'],
                            anniversary: x_contacts['anniversary'],
                            first_name: x_contacts['first_name'],
                            business_address_2: x_contacts['business_address_2'],
                            department: x_contacts['department'],
                            display_name: x_contacts['display_name'],
                            home_state: x_contacts['home_state'],
                            business_country: x_contacts['business_country'],
                            home_street: x_contacts['home_street'],
                            birthday: x_contacts['birthday'],
                            home_country: x_contacts['home_country'],
                            pager: x_contacts['pager'],
                            categories: x_contacts['categories'],
                            home_city: x_contacts['home_city'],
                            email_address3: x_contacts['email_address3'],
                            home_fax: x_contacts['home_fax'],
                            gender: x_contacts['gender'],
                            notes: x_contacts['notes'],
                            country_code: x_contacts['country_code'],
                            job_title: x_contacts['job_title'],
                            business_address: x_contacts['business_address'],
                            webpage_2: x_contacts['webpage_2'],
                            mobile_phone: x_contacts['mobile_phone'],
                            organization: x_contacts['organization'],
                            home_phone: x_contacts['home_phone'],
                            email_address2: x_contacts['email_address2'],
                            last_name: x_contacts['last_name'],
                            nick_name: x_contacts['nick_name'],
                            business_fax: x_contacts['business_fax'],
                            home_postal_code: x_contacts['home_postal_code'],
                            business_phone: x_contacts['business_phone'],
                            business_postal_code: x_contacts['business_postal_code'],
                            web_page: x_contacts['web_page'],
                            business_city: x_contacts['business_city'],
                            business_state: x_contacts['business_state'],
                            image_name: x_contacts['image'],
                            c_image_url: default_image_url_passed,
                            fullname: x_contacts['first_name'] + " " + x_contacts['last_name']
                        }
                    ];
                }
            });
        };
        this.OnFileSelected = (event) => {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#blah').attr('src', reader.result);
                Test();
            };
            var Test = () => {
                this.upload_data();
            };
            this.import_contacts = event.target.files[0];
        };
        this.upload_data = () => {
            if (this.import_contacts != undefined || this.import_contacts != null) {
                var contact_file_path = jquery__WEBPACK_IMPORTED_MODULE_4__('#blah').attr('src');
                let import_contacts_data = {
                    import_contacts: this.import_contacts,
                    import_contacts_name: this.import_contacts.name,
                    import_contacts_type: this.import_contacts.type,
                    import_contacts_path: contact_file_path,
                };
                if ((this.import_contacts.type).toLowerCase() == 'application/json') {
                    this.socket_service.import_contacts(import_contacts_data);
                }
                else {
                    this.toastr.error("Only Json File Is Allowed To Import Contacrs!!");
                }
            }
        };
        this.get_contacts_from_all_users = () => {
            this.socket_service.get_all_contacts_sync().subscribe((apiResponse) => {
                if (apiResponse['status'] == 'email_updated') {
                    if (this.current_contactid == apiResponse['unique_id']) {
                        this.toastr.success("Email Address Updated Successfully");
                    }
                }
                else if (apiResponse['status'] == 'fname_updated') {
                    if (this.current_contactid == apiResponse['unique_id']) {
                        this.toastr.success("First Name Updated Successfully");
                    }
                }
                else if (apiResponse['status'] == 'lname_updated') {
                    if (this.current_contactid == apiResponse['unique_id']) {
                        this.toastr.success("Last Name Updated Successfully");
                    }
                }
                else if (apiResponse['status'] == 'home_phone_updated') {
                    if (this.current_contactid == apiResponse['unique_id']) {
                        this.toastr.success("Home Phone Number Updated Successfully");
                    }
                }
                else if (apiResponse['status'] == 'mobile_phone_updated') {
                    if (this.current_contactid == apiResponse['unique_id']) {
                        this.toastr.success("Mobile Phone Number Updated Successfully");
                    }
                }
                else {
                    if (apiResponse['data'] != '') {
                        var cntr = 0;
                        var unique_conact_id = apiResponse['unique_id'];
                        var whole_data = apiResponse['data'];
                        for (let single_contact of whole_data) {
                            cntr++;
                            this.Contacts = [
                                ...this.Contacts,
                                {
                                    counter: this.counter,
                                    contactId: unique_conact_id + cntr,
                                    email_address: single_contact['E-mail Address'],
                                    related_name: single_contact['Related name'],
                                    home_address_2: single_contact['Home Address 2'],
                                    anniversary: single_contact['Anniversary'],
                                    first_name: single_contact['First Name'],
                                    business_address_2: single_contact['Business Address 2'],
                                    department: single_contact['Department'],
                                    display_name: single_contact['Display Name'],
                                    home_state: single_contact['Home State'],
                                    business_country: single_contact['Business Country'],
                                    home_street: single_contact['Home Street'],
                                    birthday: single_contact['Birthday'],
                                    home_country: single_contact['Home Country'],
                                    pager: single_contact['Pager'],
                                    categories: single_contact['Categories'],
                                    home_city: single_contact['Home City'],
                                    email_address3: single_contact['E-mail 3 Address'],
                                    home_fax: single_contact['Home Fax'],
                                    gender: single_contact['Gender'],
                                    notes: single_contact['Notes'],
                                    country_code: single_contact['Country Code'],
                                    job_title: single_contact['Job Title'],
                                    business_address: single_contact['Business Address'],
                                    webpage_2: single_contact['Web Page 2'],
                                    mobile_phone: single_contact['Mobile Phone'],
                                    organization: single_contact['Organization'],
                                    home_phone: single_contact['Home Phone'],
                                    email_address2: single_contact['E-mail 2 Address'],
                                    last_name: single_contact['Last Name'],
                                    nick_name: single_contact['Nickname'],
                                    business_fax: single_contact['Business Fax'],
                                    home_postal_code: single_contact['Home Postal Code'],
                                    business_phone: single_contact['Business Phone'],
                                    business_postal_code: single_contact['Business Postal Code'],
                                    web_page: single_contact['Web Page'],
                                    business_city: single_contact['Business City'],
                                    business_state: single_contact['Business State'],
                                    image_name: single_contact['image'],
                                    c_image_url: this.default_image_url,
                                    fullname: single_contact['First Name'] + " " + single_contact['Last Name']
                                }
                            ];
                        }
                        this.toastr.success('Contacts Imported Successfully!!!');
                    }
                }
            });
        };
        this.get_perticular_contact_details = (contact_id) => {
            this.current_contactid = contact_id;
            this.socket_service.get_current_contact_info(contact_id).subscribe((apiResponse) => {
                if (apiResponse['status'] == 200) {
                    this.particular_issue_info = {
                        contactId: apiResponse['data']['contactId'],
                        email_address: apiResponse['data']['email_address'],
                        related_name: apiResponse['data']['related_name'],
                        home_address_2: apiResponse['data']['home_address_2'],
                        anniversary: apiResponse['data']['anniversary'],
                        first_name: apiResponse['data']['first_name'],
                        business_address_2: apiResponse['data']['business_address_2'],
                        department: apiResponse['data']['department'],
                        display_name: apiResponse['data']['display_name'],
                        home_state: apiResponse['data']['home_state'],
                        business_country: apiResponse['data']['business_country'],
                        home_street: apiResponse['data']['home_street'],
                        birthday: apiResponse['data']['birthday'],
                        home_country: apiResponse['data']['home_country'],
                        pager: apiResponse['data']['pager'],
                        categories: apiResponse['data']['categories'],
                        home_city: apiResponse['data']['home_city'],
                        email_address3: apiResponse['data']['email_address3'],
                        home_fax: apiResponse['data']['home_fax'],
                        gender: apiResponse['data']['gender'],
                        notes: apiResponse['data']['notes'],
                        country_code: apiResponse['data']['country_code'],
                        job_title: apiResponse['data']['job_title'],
                        business_address: apiResponse['data']['business_address'],
                        webpage_2: apiResponse['data']['webpage_2'],
                        mobile_phone: apiResponse['data']['mobile_phone'],
                        organization: apiResponse['data']['organization'],
                        home_phone: apiResponse['data']['home_phone'],
                        email_address2: apiResponse['data']['email_address2'],
                        last_name: apiResponse['data']['last_name'],
                        nick_name: apiResponse['data']['nick_name'],
                        business_fax: apiResponse['data']['business_fax'],
                        home_postal_code: apiResponse['data']['home_postal_code'],
                        business_phone: apiResponse['data']['business_phone'],
                        business_postal_code: apiResponse['data']['business_postal_code'],
                        web_page: apiResponse['data']['web_page'],
                        business_city: apiResponse['data']['business_city'],
                        business_state: apiResponse['data']['business_state'],
                        image_name: apiResponse['data']['image'],
                        c_image_url: this.default_image_url,
                        fullname: apiResponse['data']['first_name'] + " " + apiResponse['data']['last_name']
                    };
                    this.old_cotact_data = {
                        contactId: apiResponse['data']['contactId'],
                        email_address: apiResponse['data']['email_address'],
                        related_name: apiResponse['data']['related_name'],
                        home_address_2: apiResponse['data']['home_address_2'],
                        anniversary: apiResponse['data']['anniversary'],
                        first_name: apiResponse['data']['first_name'],
                        business_address_2: apiResponse['data']['business_address_2'],
                        department: apiResponse['data']['department'],
                        display_name: apiResponse['data']['display_name'],
                        home_state: apiResponse['data']['home_state'],
                        business_country: apiResponse['data']['business_country'],
                        home_street: apiResponse['data']['home_street'],
                        birthday: apiResponse['data']['birthday'],
                        home_country: apiResponse['data']['home_country'],
                        pager: apiResponse['data']['pager'],
                        categories: apiResponse['data']['categories'],
                        home_city: apiResponse['data']['home_city'],
                        email_address3: apiResponse['data']['email_address3'],
                        home_fax: apiResponse['data']['home_fax'],
                        gender: apiResponse['data']['gender'],
                        notes: apiResponse['data']['notes'],
                        country_code: apiResponse['data']['country_code'],
                        job_title: apiResponse['data']['job_title'],
                        business_address: apiResponse['data']['business_address'],
                        webpage_2: apiResponse['data']['webpage_2'],
                        mobile_phone: apiResponse['data']['mobile_phone'],
                        organization: apiResponse['data']['organization'],
                        home_phone: apiResponse['data']['home_phone'],
                        email_address2: apiResponse['data']['email_address2'],
                        last_name: apiResponse['data']['last_name'],
                        nick_name: apiResponse['data']['nick_name'],
                        business_fax: apiResponse['data']['business_fax'],
                        home_postal_code: apiResponse['data']['home_postal_code'],
                        business_phone: apiResponse['data']['business_phone'],
                        business_postal_code: apiResponse['data']['business_postal_code'],
                        web_page: apiResponse['data']['web_page'],
                        business_city: apiResponse['data']['business_city'],
                        business_state: apiResponse['data']['business_state'],
                        image_name: apiResponse['data']['image'],
                        c_image_url: this.default_image_url,
                        fullname: apiResponse['data']['first_name'] + " " + apiResponse['data']['last_name']
                    };
                }
            });
        };
    }
    ngOnInit() {
        dbx.filesGetThumbnail({
            "path": `/contact_Manage/empty_avatar.jpg`, format: { '.tag': 'jpeg' },
            size: { '.tag': 'w480h320' },
            mode: { '.tag': 'strict' }
        })
            .then(function (response) {
            var fileUrl = URL.createObjectURL(response['fileBlob']);
            getdefault_image_url(fileUrl);
        })
            .catch(function (error) {
        });
        let getdefault_image_url = (fileUrl) => {
            this.default_image_url = fileUrl;
            this.getAllContacts(this.default_image_url);
        };
        //this.getAllContacts(this.default_image_url);
        this.get_contacts_from_all_users();
    }
    field_mouse_hover(edit_icon, input_box_class) {
        let data = "." + input_box_class;
        document.getElementById(edit_icon).style.display = "block";
        jquery__WEBPACK_IMPORTED_MODULE_4__(data).css("background-color", "darkgrey");
    }
    field_mouse_out(edit_icon, input_box_class) {
        let data2 = "." + input_box_class;
        document.getElementById(edit_icon).style.display = "none";
        jquery__WEBPACK_IMPORTED_MODULE_4__(data2).css("background-color", "#ecf0f5");
    }
    open_ok_cancel_btn(hover_field, click_field, ok_cancel_btn, edit_icon) {
        document.getElementById(hover_field).style.display = "none";
        document.getElementById(click_field).style.display = "block";
        document.getElementById(ok_cancel_btn).style.display = "block";
        document.getElementById(edit_icon).style.display = "none";
    }
    remove_field(clecked_field_name, ok_cancel_btn, hover_field, click_field) {
        this.particular_issue_info[clecked_field_name] = this.old_cotact_data[clecked_field_name];
        document.getElementById(ok_cancel_btn).style.display = "none";
        document.getElementById(hover_field).style.display = "block";
        document.getElementById(click_field).style.display = "none";
    }
    update_email_address() {
        let updated_data = {
            email_address: this.particular_issue_info['email_address'],
            contactId: this.current_contactid
        };
        this.socket_service.update_contact_email_address(updated_data);
        document.getElementById('email_ok_cancel_btn').style.display = "none";
        document.getElementById('main_hover_email').style.display = "block";
        document.getElementById('main_click_email').style.display = "none";
    }
    update_fname() {
        let updated_fname_data = {
            first_name: this.particular_issue_info['first_name'],
            contactId: this.current_contactid
        };
        this.socket_service.update_contact_fname(updated_fname_data);
        document.getElementById('fname_ok_cancel_btn').style.display = "none";
        document.getElementById('main_hover_fname').style.display = "block";
        document.getElementById('fname_click_input').style.display = "none";
    }
    update_lname() {
        let updated_lname_data = {
            last_name: this.particular_issue_info['last_name'],
            contactId: this.current_contactid
        };
        this.socket_service.update_contact_lname(updated_lname_data);
        document.getElementById('lname_ok_cancel_btn').style.display = "none";
        document.getElementById('main_hover_lname').style.display = "block";
        document.getElementById('lname_click_input').style.display = "none";
    }
    update_home_phone() {
        let updated_home_phone = {
            home_phone: this.particular_issue_info['home_phone'],
            contactId: this.current_contactid
        };
        this.socket_service.update_home_phone(updated_home_phone);
        document.getElementById('home_phone_ok_cancel_btn').style.display = "none";
        document.getElementById('main_hover_home_phone').style.display = "block";
        document.getElementById('main_click_home_phone').style.display = "none";
    }
    update_mobile_phone() {
        let updated_mobile_phone = {
            mobile_phone: this.particular_issue_info['mobile_phone'],
            contactId: this.current_contactid
        };
        this.socket_service.update_mobile_phone(updated_mobile_phone);
        document.getElementById('mobile_phone_ok_cancel_btn').style.display = "none";
        document.getElementById('main_hover_mobile_phone').style.display = "block";
        document.getElementById('main_click_mobile_phone').style.display = "none";
    }
    getSantizeUrl(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
};
ContactComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_socket_contact_service__WEBPACK_IMPORTED_MODULE_3__["SocketContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/dashboard/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/dashboard/contact/contact.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var src_app_SafePipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/SafePipe */ "./src/app/SafePipe.ts");
/* harmony import */ var _pariculat_contacts_pariculat_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pariculat-contacts/pariculat-contacts.component */ "./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.ts");









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], src_app_SafePipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"], _pariculat_contacts_pariculat_contacts_component__WEBPACK_IMPORTED_MODULE_8__["PariculatContactsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: 'Dashboard', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'Contact/:ContactId', component: _pariculat_contacts_pariculat_contacts_component__WEBPACK_IMPORTED_MODULE_8__["PariculatContactsComponent"] }
            ])
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th{\r\n    padding: 1% !important;\r\n}\r\ntd{\r\n    padding: 1% !important;\r\n}\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2\r\n}\r\n.nsm-dialog.modal {\r\n    width: 100% !important;\r\n    height: 50vh;\r\n}\r\n.nsm-content{\r\n    max-width: none !important;\r\n}\r\n.cretae_issue_header{\r\n    border-bottom: #f2f2f2 !important;\r\n    text-align: center !important;\r\n}\r\nhr{\r\n    border-color: #f2f2f2 !important;\r\n}\r\n.sidebar-menu > li > a\r\n{\r\n    padding : 0px !important;\r\n}\r\nbody {\r\n    overflow-y: hidden !important;\r\n}\r\n.wrapper {\r\n    overflow-y: hidden !important;\r\n}\r\n.msg-modal { width: 75%; max-width: none; border-radius: 10px; padding: 12px 0 0 0; }\r\n.loader {\r\n    position:fixed;\r\n    width:100%;\r\n    left:0;right:0;top:0;bottom:0;\r\n    background-color: rgba(255,255,255,0.7);\r\n    z-index:9999;\r\n    display:none;\r\n}\r\n.ngx-pagination{\r\n    margin-top:2% !important;\r\n}\r\n#loader::after {\r\ncontent:'';\r\ndisplay:block;\r\nposition:absolute;\r\nleft:48%;top:40%;\r\nwidth:40px;height:40px;\r\nborder-style:solid;\r\nborder-color:black;\r\nborder-top-color:transparent;\r\nborder-width: 4px;\r\nborder-radius:50%;\r\n-webkit-animation: spin .8s linear infinite;\r\nanimation: spin .8s linear infinite;\r\n}\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n0% { -webkit-transform: rotate(0deg); }\r\n100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\ntable tr td a {\r\n    display: block;\r\n}\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .col-xs-12{\r\n        margin-top : 2% !important;\r\n    }\r\n    a.btn.btn-default.btn-flat.User-profile-btn {\r\n        color: #3c8dbc !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BhcmljdWxhdC1jb250YWN0cy9wYXJpY3VsYXQtY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUEsYUFBYSxVQUFVLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFO0FBQ3BGO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQzdCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixRQUFRLENBQUMsT0FBTztBQUNoQixVQUFVLENBQUMsV0FBVztBQUN0QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQyxtQ0FBbUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLLCtCQUErQixFQUFFO0FBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0FBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3BhcmljdWxhdC1jb250YWN0cy9wYXJpY3VsYXQtY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xyXG4gICAgcGFkZGluZzogMSUgIWltcG9ydGFudDtcclxufVxyXG50ZHtcclxuICAgIHBhZGRpbmc6IDElICFpbXBvcnRhbnQ7XHJcbn1cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjJcclxufVxyXG4ubnNtLWRpYWxvZy5tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi5uc20tY29udGVudHtcclxuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jcmV0YWVfaXNzdWVfaGVhZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuaHJ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG4uc2lkZWJhci1tZW51ID4gbGkgPiBhXHJcbntcclxuICAgIHBhZGRpbmcgOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tc2ctbW9kYWwgeyB3aWR0aDogNzUlOyBtYXgtd2lkdGg6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDEycHggMCAwIDA7IH1cclxuLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcclxuICAgIHotaW5kZXg6OTk5OTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSAgXHJcbi5uZ3gtcGFnaW5hdGlvbntcclxuICAgIG1hcmdpbi10b3A6MiUgIWltcG9ydGFudDtcclxufVxyXG4jbG9hZGVyOjphZnRlciB7XHJcbmNvbnRlbnQ6Jyc7XHJcbmRpc3BsYXk6YmxvY2s7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OjQ4JTt0b3A6NDAlO1xyXG53aWR0aDo0MHB4O2hlaWdodDo0MHB4O1xyXG5ib3JkZXItc3R5bGU6c29saWQ7XHJcbmJvcmRlci1jb2xvcjpibGFjaztcclxuYm9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtcclxuYm9yZGVyLXdpZHRoOiA0cHg7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG4td2Via2l0LWFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIGluZmluaXRlO1xyXG5hbmltYXRpb246IHNwaW4gLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4vKiBTYWZhcmkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4wJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbjAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG50YWJsZSB0ciB0ZCBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuY29sLXhzLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3AgOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYS5idG4uYnRuLWRlZmF1bHQuYnRuLWZsYXQuVXNlci1wcm9maWxlLWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICMzYzhkYmMgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbC14cy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wIDogMiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGEuYnRuLmJ0bi1kZWZhdWx0LmJ0bi1mbGF0LlVzZXItcHJvZmlsZS1idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb2wteHMtMTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBhLmJ0bi5idG4tZGVmYXVsdC5idG4tZmxhdC5Vc2VyLXByb2ZpbGUtYnRuIHtcclxuICAgICAgICBjb2xvcjogIzNjOGRiYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.ts ***!
  \******************************************************************************/
/*! exports provided: PariculatContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PariculatContactsComponent", function() { return PariculatContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_socket_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket-contact.service */ "./src/app/socket-contact.service.ts");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let dbx = new dropbox__WEBPACK_IMPORTED_MODULE_4__["Dropbox"]({ accessToken: '8OFJNocMFEAAAAAAAAAAhPJetJappwjmhdqNUT5izThN7PRcKdTA27CM6kt3-r_n', fetch: fetch });
let PariculatContactsComponent = class PariculatContactsComponent {
    constructor(activated_route, domSanitizer, _router, socket_service) {
        this.activated_route = activated_route;
        this.domSanitizer = domSanitizer;
        this._router = _router;
        this.socket_service = socket_service;
        this.import_contacts = null;
        this.Contacts = [];
        this.counter = 0;
        this.scrollToElement = (element) => {
            var elmnt = document.getElementById(element);
            elmnt.scrollIntoView();
        };
        this.getAllContacts = (default_image_url_passed) => {
            this.Contacts = [];
            this.socket_service.get_all_contacts().subscribe((apiResponse) => {
                for (let x_contacts of apiResponse['data']) {
                    this.counter++;
                    this.Contacts = [
                        ...this.Contacts,
                        {
                            counter: this.counter,
                            contactId: x_contacts['contactId'],
                            email_address: x_contacts['email_address'],
                            related_name: x_contacts['related_name'],
                            home_address_2: x_contacts['home_address_2'],
                            anniversary: x_contacts['anniversary'],
                            first_name: x_contacts['first_name'],
                            business_address_2: x_contacts['business_address_2'],
                            department: x_contacts['department'],
                            display_name: x_contacts['display_name'],
                            home_state: x_contacts['home_state'],
                            business_country: x_contacts['business_country'],
                            home_street: x_contacts['home_street'],
                            birthday: x_contacts['birthday'],
                            home_country: x_contacts['home_country'],
                            pager: x_contacts['pager'],
                            categories: x_contacts['categories'],
                            home_city: x_contacts['home_city'],
                            email_address3: x_contacts['email_address3'],
                            home_fax: x_contacts['home_fax'],
                            gender: x_contacts['gender'],
                            notes: x_contacts['notes'],
                            country_code: x_contacts['country_code'],
                            job_title: x_contacts['job_title'],
                            business_address: x_contacts['business_address'],
                            webpage_2: x_contacts['webpage_2'],
                            mobile_phone: x_contacts['mobile_phone'],
                            organization: x_contacts['organization'],
                            home_phone: x_contacts['home_phone'],
                            email_address2: x_contacts['email_address2'],
                            last_name: x_contacts['last_name'],
                            nick_name: x_contacts['nick_name'],
                            business_fax: x_contacts['business_fax'],
                            home_postal_code: x_contacts['home_postal_code'],
                            business_phone: x_contacts['business_phone'],
                            business_postal_code: x_contacts['business_postal_code'],
                            web_page: x_contacts['web_page'],
                            business_city: x_contacts['business_city'],
                            business_state: x_contacts['business_state'],
                            image_name: x_contacts['image'],
                            c_image_url: default_image_url_passed,
                            fullname: x_contacts['first_name'] + " " + x_contacts['last_name']
                        }
                    ];
                }
            });
        };
        this.get_contacts_from_all_users = () => {
            this.socket_service.get_all_contacts_sync().subscribe((apiResponse) => {
                if (apiResponse != '') {
                    for (let single_contact of apiResponse) {
                        this.Contacts = [
                            ...this.Contacts,
                            {
                                counter: this.counter,
                                contactId: single_contact['contactId'],
                                email_address: single_contact['E-mail Address'],
                                related_name: single_contact['Related name'],
                                home_address_2: single_contact['Home Address 2'],
                                anniversary: single_contact['Anniversary'],
                                first_name: single_contact['First Name'],
                                business_address_2: single_contact['Business Address 2'],
                                department: single_contact['Department'],
                                display_name: single_contact['Display Name'],
                                home_state: single_contact['Home State'],
                                business_country: single_contact['Business Country'],
                                home_street: single_contact['Home Street'],
                                birthday: single_contact['Birthday'],
                                home_country: single_contact['Home Country'],
                                pager: single_contact['Pager'],
                                categories: single_contact['Categories'],
                                home_city: single_contact['Home City'],
                                email_address3: single_contact['E-mail 3 Address'],
                                home_fax: single_contact['Home Fax'],
                                gender: single_contact['Gender'],
                                notes: single_contact['Notes'],
                                country_code: single_contact['Country Code'],
                                job_title: single_contact['Job Title'],
                                business_address: single_contact['Business Address'],
                                webpage_2: single_contact['Web Page 2'],
                                mobile_phone: single_contact['Mobile Phone'],
                                organization: single_contact['Organization'],
                                home_phone: single_contact['Home Phone'],
                                email_address2: single_contact['E-mail 2 Address'],
                                last_name: single_contact['Last Name'],
                                nick_name: single_contact['Nickname'],
                                business_fax: single_contact['Business Fax'],
                                home_postal_code: single_contact['Home Postal Code'],
                                business_phone: single_contact['Business Phone'],
                                business_postal_code: single_contact['Business Postal Code'],
                                web_page: single_contact['Web Page'],
                                business_city: single_contact['Business City'],
                                business_state: single_contact['Business State'],
                                image_name: single_contact['image'],
                                c_image_url: this.default_image_url,
                                fullname: single_contact['First Name'] + " " + single_contact['Last Name']
                            }
                        ];
                    }
                }
            });
        };
    }
    ngOnInit() {
        this.current_contactid = this.activated_route.snapshot.paramMap.get('ContactId');
        this.activated_route.params.subscribe(params => {
            this.current_contactid = params['ContactId'];
        });
        dbx.filesGetThumbnail({
            "path": `/contact_Manage/empty_avatar.jpg`, format: { '.tag': 'jpeg' },
            size: { '.tag': 'w480h320' },
            mode: { '.tag': 'strict' }
        })
            .then(function (response) {
            var fileUrl = URL.createObjectURL(response['fileBlob']);
            getdefault_image_url(fileUrl);
        })
            .catch(function (error) {
        });
        let getdefault_image_url = (fileUrl) => {
            this.default_image_url = fileUrl;
            this.getAllContacts(this.default_image_url);
            this.scrollToElement(this.current_contactid);
        };
        this.get_contacts_from_all_users();
    }
    getSantizeUrl(url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
};
PariculatContactsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_socket_contact_service__WEBPACK_IMPORTED_MODULE_3__["SocketContactService"] }
];
PariculatContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pariculat-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pariculat-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pariculat-contacts.component.css */ "./src/app/dashboard/pariculat-contacts/pariculat-contacts.component.css")).default]
    })
], PariculatContactsComponent);



/***/ }),

/***/ "./src/app/socket-contact.service.ts":
/*!*******************************************!*\
  !*** ./src/app/socket-contact.service.ts ***!
  \*******************************************/
/*! exports provided: SocketContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContactService", function() { return SocketContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let SocketContactService = class SocketContactService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3002";
        this.ContactUrl = "http://localhost:3002/api/v1/contacts";
        this.import_contacts = (import_contacts_data) => {
            this.socket.emit("import-contacts", import_contacts_data);
            this.socket.emit("unique_contact_id", import_contacts_data);
        };
        this.get_all_contacts = () => {
            let response = this._http.get(`${this.ContactUrl}/view_all_contacts`);
            return response;
        };
        this.update_contact_email_address = (data_to_update) => {
            this.socket.emit("update_email_address", data_to_update);
        };
        this.update_contact_fname = (data_to_update) => {
            this.socket.emit("update_fname", data_to_update);
        };
        this.update_contact_lname = (data_to_update) => {
            this.socket.emit("update_lname", data_to_update);
        };
        this.update_home_phone = (data_to_update) => {
            this.socket.emit("update_home_phone", data_to_update);
        };
        this.update_mobile_phone = (data_to_update) => {
            this.socket.emit("update_mobile_phone", data_to_update);
        };
        this.get_all_contacts_sync = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create((observer) => {
                this.socket.on('import-contacts', (data) => {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        };
        this.get_current_contact_info = (contactid) => {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('contactId', contactid);
            let response = this._http.post(`${this.ContactUrl}/Contact_info`, params);
            return response;
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"](this.baseUrl, { transports: ['websocket'], secure: true });
    }
};
SocketContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SocketContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketContactService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\intouch\frontend\front\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map