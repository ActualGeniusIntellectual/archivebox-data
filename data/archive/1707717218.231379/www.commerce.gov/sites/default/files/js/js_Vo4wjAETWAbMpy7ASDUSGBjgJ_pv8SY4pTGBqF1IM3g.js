/* Source and licensing information for the line(s) below can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/openid_connect.js. */

//jQuery( document ).ready(function(){
  jQuery('#openid-connect-login-form').submit();
//});
    
/* Source and licensing information for the above line(s) can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/openid_connect.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/offices.js. */
jQuery("body").ready(function($) {
    var phrases = [];
    $('.uswds-breadcrumbs').each(function(){
      var phrase = '';
      $(this).find('li').each(function(){
        var current = $(this);
        var office = $.trim(current.text());
        if (office === 'Cfo Asa' || office === 'Ipef' || office === 'Cr' || office === 'Hr' || office === 'Irmpo' || office === 'Oam' || office === 'Ocio' || 
            office === 'Ofm' || office === 'Ofeq' || office === 'Ogc' || office === 'Opog' || office === 'Osy' || office === 'Osdbu') {
          jQuery(this).css("text-transform", "uppercase");
        }
      });
    });
  });

/* Source and licensing information for the above line(s) can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/offices.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/accessibility.js. */
//Fixes 1.3.1 Info and Relationships (#247 and #474)
var $element_doc_main_query = jQuery('form#usasearch-search-block-form--2 input[type="search"]');
var $element_qa_feature_mobile_query = jQuery('form#usasearch-search-block-form--3 input[type="search"]');
var $element_office_site_query = jQuery('form#usasearch-search-block-form input[type="search"]');
var $element_hero_section_home = jQuery('section div.region.region-hero');
var $element_main_menu = jQuery('ul.usa-nav-primary.usa-accordion');
$element_doc_main_query.attr('id','doc_main_query');
$element_doc_main_query.prev().attr('for','doc_main_query');
$element_qa_feature_mobile_query.attr('id','qa_feature_mobile_query');
$element_qa_feature_mobile_query.prev().attr('for','qa_feature_mobile_query');
$element_office_site_query.attr('id','office_site_query');
$element_office_site_query.prev().attr('for','office_site_query');
$element_hero_section_home.parent().attr('aria-label','Homepage hero section');
$element_main_menu.attr('aria-label','Desktop version of the main navigation for Commerce.gov');

//Fixes 3.3.2 Labels or Instructions (#267)
var label = jQuery('nav.pager').attr('aria-labelledby');
jQuery('h4.pager__heading').attr('id',label);

//Fixes 4.1.2 Name, Role, Value (Redundant WAI-ARIA attribute) (#267, #467, #476)
jQuery('article, nav, footer').removeAttr('role');
jQuery('article.media button[role="button"]').removeAttr('role');
jQuery('ul.usa-sidenav-list.usa-accordion[aria-multiselectable="true"]').removeAttr('role');
jQuery('.region-mobile-menu').attr({
    role: 'navigation',
    'aria-label': 'Commerce main mobile menu section',
});

//Fixes 1.3.1 Info and Relationships (Non-distinguishable landmarks) (#267)
jQuery('section.usa-banner').attr('aria-label','official government website');
jQuery('section.uswds-middle-section').attr('aria-label','section for main content');
jQuery('div.usa-nav').attr('aria-label','mobile navigation search');

//Fixes 1.1.1 Non-text Content (WAI-ARIA image is missing alternative text) (#440)
jQuery(document).ready(function() {
    var socialMediaLabels = ['Twitter page','Facebook page','Linkedin page','YouTube page','rss feed'],
        i=0,
        current,
        element;
    for(i;i<socialMediaLabels.length;i++) {
        current = socialMediaLabels[i];
        element = jQuery('div.usa-footer-contact-links a[aria-label="Department of Commerce ' + current + '"] svg[aria-hidden="true"]');
        element.attr({
            alt:'Commerce ' + current,
            'aria-label':'Commerce ' + current
        });
        element.closest('a').addClass('ext');
    }
});

//add a try/catch since it fails on qa sometimes
try {
    var $elements_mobile_menus = jQuery('ul.usa-sidenav-list.usa-accordion');
    if ($elements_mobile_menus.length != 0) {
      $elements_mobile_menus[0].setAttribute('aria-label','Mobile version of the main navigation for Commerce.gov');
      $elements_mobile_menus[1].setAttribute('aria-label','Mobile version of the secondary top navigation for Commerce.gov');
    }
} catch (error){
    console.log(error);
}
//Fix for 508 Thumbs up and down svg images
jQuery('svg.fa-thumbs-up').removeAttr('role');
jQuery('svg.fa-thumbs-down').removeAttr('role');

//jQuery('svg.fa-thumbs-up').attr("role", "presentation");
//jQuery('svg.fa-thumbs-down').attr("role", "presentation");


// Fix for #740 - 508 A accessibility fixes for Twitter iframe
jQuery('svg.svg-inline--fa').bind('load', function() {
  jQuery(this).attr("role", "presentation");
});

var iframe = jQuery('iframe');
    iframe.removeAttr('frameborder');
    iframe.removeAttr('scrolling');
    iframe.removeAttr('allowfullscreen');
    iframe.removeAttr('allowtransparency');


// Script to fix #740 - 508 A accessibility fixes for Twitter iframe

(function (jQuery) {
  Drupal.behaviors.customScript = {
    attach: function(context, settings) {
      jQuery('#twitter-widget-0').removeAttr('frameborder');
      jQuery('#twitter-widget-0').removeAttr('scrolling');
      jQuery('#twitter-widget-0').removeAttr('allowfullscreen');
      jQuery('#twitter-widget-0').removeAttr('allowtransparency');
    }
  };
})(jQuery);

/* Source and licensing information for the above line(s) can be found at https://www.commerce.gov/themes/custom/commerce/assets/js/accessibility.js. */;
