import { ApiService } from "./api";

interface WebDevelopmentResponse {
  data: Array<{
    Title: string;
    description: string;
    WebProcessTitle: string;
    FAQ_title: string;
    FAQ_description: string;
    Leading_Solutions: {
      title: string;
      subtitle: string;
    };
    // Add other fields as needed
  }>;
}

export class AllServices {
  //https://cms.kriva.tech/api/lapl-home-page?populate[hero][populate]=*&populate[featured_projects][populate][lapl_case_study_collections][populate]=image&populate[stats][populate]=*&populate[partner][populate]=*&populate[testimonal][populate]=*&populate[home_blog][populate][lapl_blog_collections][populate]=*&populate[proffesional][populate]=*&populate[brands][populate]=*&populate[case_study][populate][lapl_services][populate][lapl_chips][populate][lapl_services][populate]=*&[populate][seo][populate]=*
  static async getHomePageData() {
    const params = {
      "populate[hero][populate]": "*",
      "populate[featured_projects][populate][lapl_case_study_collections][populate]":
        "image",
      "populate[stats][populate]": "*",
      "populate[partner][populate]": "*",
      "populate[testimonal][populate]": "*",
      "populate[home_blog][populate][lapl_blog_collections][populate]": "*",
      "populate[proffesional][populate]": "*",
      "populate[brands][populate]": "*",
      "populate[case_study][populate][lapl_services][populate][lapl_chips][populate][lapl_services][populate]":
        "*",
      "populate[seo][populate]": "*",
    };

    return ApiService.strapiRequestGetDataFromCMS("lapl-home-page", { params });
  }

  static async getBlogData() {
    const params = {
      "populate[hero_section][populate]": "*",
      "populate[blogs][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-blog-page", { params });
  }
  //https://cms.kriva.tech/api/lapl-about-page?populate[about][populate][button]=*&populate[lapl__mssion][populate]=*&populate[lapl_culture][populate]=*&populate[lapl_culture_items][populate]=*&populate[lapl_risk_section][populate]=*&populate[lapl__awards__section][populate][lapl__awards_items][populate]=image&populate[lapl_testimonial_section][populate][button]=*&populate[lapl_testimonial_section][populate][lapl_reviews]=*&populate[seo][populate]=*&populate[about_hero][populate]=*
  static async getAboutPageData() {
    const endpoint = "lapl-about-page";
    const params = {
      "populate[about][populate][button]": "*",
      "populate[lapl__mssion][populate]": "*",
      "populate[lapl_culture][populate]": "*",
      "populate[lapl_culture_items][populate]": "*",
      "populate[lapl_risk_section][populate]": "*",
      "populate[lapl__awards__section][populate][lapl__awards_items][populate]":
        "image",
      "populate[lapl_testimonial_section][populate][button]": "*",
      "populate[lapl_testimonial_section][populate][lapl_reviews][populate]":
        "*",
      "populate[seo][populate]": "*",
      "populate[about_hero][populate]": "*",

    };

    return ApiService.strapiRequestGetDataFromCMS(endpoint, { params });
  }

  // https://cms.kriva.tech/api/lapl-wall-of-love-page?populate[hero_section][populate]=*&populate[review1][populate][button]=true&populate[review1][populate][lapl_reviews]=true&populate[review2][populate][button]=true&populate[review2][populate][lapl_reviews]=true&populate[review3][populate][button]=true&populate[review3][populate][lapl_reviews]=true
  static async getWallOfLoveData() {
    const params = {
      "populate[hero_section][populate]": "*",
      "populate[review1][populate]": "*",
      "populate[review2][populate]": "*",
      "populate[review3][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-wall-of-love-page", {
      params,
    });
  }

  static async getJavaScriptDeveloperData() {
    const params = {
      "populate[hero][populate]": "*",
      "populate[quick_placemet][populate]": "*",
      "populate[hire][populate]": "*",
      "populate[integrtaed_team][populate][team_qualities][populate]": "icon",
      "populate[integrtaed_team][populate]": "lets_talk_button",
      "populate[flexible_models][populate]": "*",
      "populate[still_have_doubts][populate][case_studies][populate]": "image",
      "populate[still_have_doubts][populate]": "button",
      "populate[best_developers][populate]": "*",
    };

    return ApiService.strapiRequestGetDataFromCMS("lapl-js-developer", {
      params,
    });
  }
  //generate link for js service page
  //https://cms.kriva.tech/api/lapl-service-collections?populate[hero][populate]=*&populate[quick_placement][populate]=*&populate[hire][populate]=*&populate[integrtaed_team][populate][team_qualities][populate]=*&populate[programmers][populate][program_models][populate]=icon&populate[finest_product][populate][finest_models][populate]=icon&populate[qualities][populate]=*&populate[still_have_doubts][populate][case_studies][populate]=image&populate[still_have_doubts][populate]=button&populate[engagement][populate][engagement_model][populate]=icon&populate[partner][populate][partner_section][populate]=*
  static async getJsServiceData() {
    const params = {
      "populate[hero][populate]": "*",
      "populate[quick_placement][populate]": "*",
      "populate[hire][populate]": "*",
      "populate[integrtaed_team][populate][team_qualities][populate]": "*",
      "populate[programmers][populate][program_models][populate]": "icon",
      "populate[finest_product][populate][finest_models][populate]": "icon",
      "populate[qualities][populate]": "*",
      "populate[still_have_doubts][populate][case_studies][populate]": "image",
      "populate[still_have_doubts][populate]": "button",
      "populate[engagement][populate][engagement_model][populate]": "icon",
      "populate[partner][populate][partner_section][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-service-collections", {
      params,
    });
  }

  static async getServiceDataBySlug(slug: string) {
    const params = {
      "filters[slug][$eq]": slug,
      "populate[hero][populate]": "*",
      "populate[quick_placement][populate]": "*",
      "populate[hire][populate]": "*",
      "populate[integrtaed_team][populate][team_qualities][populate]": "*",
      "populate[programmers][populate][program_models][populate]": "icon",
      "populate[finest_product][populate][finest_models][populate]": "icon",
      "populate[qualities][populate]": "*",
      "populate[still_have_doubts][populate][case_studies][populate]": "image",
      "populate[still_have_doubts][populate]": "button",
      "populate[engagement][populate][engagement_model][populate]": "icon",
      "populate[partner][populate][partner_section][populate]": "*",
      "populate[seo][populate]": "*",
    };
    try {
      const response = (await ApiService.strapiRequestGetDataFromCMS(
        "lapl-service-collections",
        { params }
      )) as { data: any[] };

      // Return the first item since we're already filtering by slug in the query
      if (response?.data?.length > 0) {
        return response.data[0];
      }

      throw new Error("Service data not found");
    } catch (error) {
      console.error("Error in getServiceDataBySlug:", error);
      throw error;
    }
  }

  //https://cms.kriva.tech/api/lapl-blog-details?populate[hero_section][populate]=*&populate[blog_header][populate]=*&populate[author_info][populate]=*&populate[blog_content][populate]=*&populate[author_footer][populate]=*&populate[related_posts][populate][lapl_blog_collections][populate]=*&populate[seo][populate]=*
  static async getBlogDetailsData() {
    const params = {
      "populate[hero_section][populate]": "*",
      "populate[blog_header][populate]": "*",
      "populate[author_info][populate]": "*",
      "populate[blog_content][populate]": "*",
      "populate[author_footer][populate]": "*",
      "populate[related_posts][populate][lapl_blog_collections][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-blog-details", {
      params,
    });
  }

  static async getBlogDetailsBySlug(slug: string) {
    const params = {
      "filters[slug][$eq]": slug,
      "populate[hero_section][populate]": "*",
      "populate[blog_header][populate]": "*",
      "populate[author_info][populate]": "*",
      "populate[blog_content][populate]": "*",
      "populate[author_footer][populate]": "*",
      "populate[related_posts][populate][lapl_blog_collections][populate]": "*",
    };
    try {
      const response = (await ApiService.strapiRequestGetDataFromCMS(
        "lapl-blog-details",
        { params }
      )) as { data: any[] };

      // Return the first item since we're already filtering by slug in the query
      if (response?.data?.length > 0) {
        return response.data[0];
      }

      throw new Error("Blog details not found");
    } catch (error) {
      console.error("Error in getBlogDetailsBySlug:", error);
      throw error;
    }
  }

  //https://cms.kriva.tech/api/lapl-case-study-detail-pages?populate[lapl_case_details][populate][lapl_case_detail_image][populate]=images&populate[lapl_case_details][populate]=lapl_case_cloud_section&populate[lapl_case_details][populate][lapl_case_study_detail_service_section][populate]=lapl_case_study_detail_service_section_items&populate[lapl_case_details][populate][labels][populate]=*
  static async getCaseDetailsData() {
    const params = {
      "populate[lapl_case_details][populate][lapl_case_detail_image][populate]":
        "images",
      "populate[lapl_case_details][populate]": "lapl_case_cloud_section",
      "populate[lapl_case_details][populate][lapl_case_study_detail_service_section][populate]":
        "lapl_case_study_detail_service_section_items",
      "populate[lapl_case_details][populate][labels][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS(
      "lapl-case-study-detail-pages",
      { params }
    );
  }
  //https://cms.kriva.tech/api/lapl-case-study-page?populate[hero_section][populate][lapl_case_study_collections][populate]=*&populate[hero_section][populate]=button&populate[seo][populate]=*&populate[case_study_hero][populate]=*
  static async getCaseStudyPageData() {
    const params = {
      "populate[hero_section][populate][lapl_case_study_collections][populate]":
        "*",
      "populate[hero_section][populate]": "button",
      "populate[seo][populate]": "*",
      "populate[case_study_hero][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-case-study-page", {
      params,
    });
  }

  static async getFreeQuoteFormData() {
    const params = {
      "populate[question_form][populate]": "*",
      "populate[seo][populate]": "*",
      "populate[free_quote_hero][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-forms", { params });
  }
  //https://cms.kriva.tech/api/lapl-service-page-2?populate[flexible_models][populate][staff][populate]=icon&populate[performance][populate][lapl_services][populate][lapl_chips][populate][lapl_services][populate]=*&populate[performance][populate][button]=*&[populate][service_components][populate][service_items][populate]=*&populate[seo][populate]=*
  static async getServicePageData() {
    const params = {
      "populate[flexible_models][populate][staff][populate]": "icon",
      "populate[performance][populate][lapl_services][populate][lapl_chips][populate][lapl_services][populate]":
        "*",
      "populate[performance][populate][button]": "*",
      "populate[service_components][populate][service_items][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-service-page-2", {
      params,
    });
  }
  //https://cms.kriva.tech/api/lapl-contact-form?populate[content][populate][button]=true&populate[content][populate][form_points]=true&populate[content][populate][send_message_button]=true&populate[seo][populate]=*&populate[contact_hero][populate]=*

  static async getContactFormData() {
    const params = {
      "populate[content][populate][button]": "true",
      "populate[content][populate][form_points]": "true",
      "populate[content][populate][send_message_button]": "true",
      "populate[seo][populate]": "*",
      "populate[contact_hero][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-contact-form", {
      params,
    });
  }

  // submit contact form /api/lapl/contactform POST method
  // Submit contact form with file upload support
  static async submitContactForm(data: any) {
    // If data is FormData (for file uploads), use different headers
    if (data instanceof FormData) {
      return ApiService.apiRequestWithFormData("api/lapl/contactform", {
        method: "POST",
        body: data,
      });
    }
    
    // For regular JSON data
    return ApiService.apiRequest("api/lapl/contactform", {
      method: "POST",
      body: data,
    });
  }

  // Submit career application with CV file upload
  static async submitCareerApplication(data: any) {
    // If data is FormData (for file uploads), use different headers
    if (data instanceof FormData) {
      return ApiService.apiRequestWithFormData("api/lapl/career-application", {
        method: "POST",
        body: data,
      });
    }
    
    // For regular JSON data (fallback)
    return ApiService.apiRequest("api/lapl/career-application", {
      method: "POST",
      body: data,
    });
  }
  static async getBlogPageData() {
    const params = {
      "populate[hero_section][populate]": "*",
      "populate[blogs][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-blog-page", { params });
  }
  //https://cms.kriva.tech/api/lapl-contact-us?populate[image][populate]=*&populate[faq][populate]=*&populate[button][populate]=*
  static async getContactUsData() {
    const params = {
      "populate[image][populate]": "*",
      "populate[faq][populate]": "*",
      "populate[button][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-contact-us", {
      params,
    });
  }

  //https://cms.kriva.tech/api/lapl-case-dashdevs?populate[hero][populate]=*&[populate][details][populate]=*&[populate][challenges][populate]=*&[populate][icon_section][populate][icons][populate]=*&[populate][stats][populate]=*&[populate][functionality][populate][functions][populate]=*&[populate][qualities][populate][lapl__quality_list][populate]=*&[populate][technologies][populate][images][populate]=*&[populate][creation][populate][create_content][populate]=*&populate[seo][populate]=*
  static async getCaseStudyBySlug(slug: string) {
    const params = {
      "filters[slug][$eq]": slug,
      "populate[hero][populate]": "*",
      "populate[details][populate]": "*",
      "populate[challenges][populate]": "*",
      "populate[icon_section][populate][icons][populate]": "*",
      "populate[stats][populate]": "*",
      "populate[functionality][populate][functions][populate]": "*",
      "populate[qualities][populate][lapl__quality_list][populate]": "*",
      "populate[technologies][populate][images][populate]": "*",
      "populate[creation][populate][create_content][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-case-dashdevs", {
      params,
    });
  }

  //https://cms.kriva.tech/api/lapl-web-sections?populate[button_contact][populate]=*&[populate][Trusted_Companies][populate]=*&[populate][Explore_Services][populate][models][populate]=*&[populate][OurCore_Values][populate][models][populate]=*&[populate][Leading_Solutions][populate][models][populate]=*&[populate][DetailsList][populate]=*&[populate][Benifits_Section][populate]=*&[populate][FAQ_details][populate]=*&[populate][hero_section][populate]=*&populate[seo][populate]=*
  static async getTechnologyData(slug: string) {
    if (!slug) {
      throw new Error("Slug is required for getTechnologyData");
    }

    // If requesting the main technologies page
    if (slug === 'technologies') {
      const params = {
        "populate[hero_section][populate]": "*",
        "populate[button_contact][populate]": "*",
        "populate[Trusted_Companies][populate]": "*",
        "populate[Explore_Services][populate][models][populate]": "*",
        "populate[OurCore_Values][populate][models][populate]": "*",
        "populate[Leading_Solutions][populate][models][populate]": "*",
        "populate[DetailsList][populate]": "*",
        "populate[Benifits_Section][populate]": "*",
        "populate[FAQ_details][populate]": "*",
        "populate[seo][populate]": "*",
      };

      try {
        const response = await ApiService.strapiRequestGetDataFromCMS(
          "lapl-web-sections",
          { params }
        );

        if (!response || !response.data) {
          throw new Error("No technology data found");
        }

        return response.data;
      } catch (error) {
        console.error("Error fetching technology listing:", error);
        throw error;
      }
    }

    // If requesting a specific technology page
    const params = {
      "filters[slug_id][$eq]": slug,
      "populate[hero_section][populate]": "*",
      "populate[button_contact][populate]": "*",
      "populate[Trusted_Companies][populate]": "*",
      "populate[Explore_Services][populate][models][populate]": "*",
      "populate[OurCore_Values][populate][models][populate]": "*",
      "populate[Leading_Solutions][populate][models][populate]": "*",
      "populate[DetailsList][populate]": "*",
      "populate[Benifits_Section][populate]": "*",
      "populate[FAQ_details][populate]": "*",
      "populate[seo][populate]": "*",
    };

    try {
      const response = await ApiService.strapiRequestGetDataFromCMS(
        "lapl-web-sections",
        { params }
      );

      if (!response || !response.data) {
        throw new Error("No technology data found");
      }

      // For specific technology pages, we expect a single item
      const data = Array.isArray(response.data) ? response.data[0] : response.data;
      
      if (!data) {
        throw new Error(`Technology data not found for slug: ${slug}`);
      }

      return data;
    } catch (error) {
      console.error(`Error fetching technology data for ${slug}:`, error);
      throw error;
    }
  }

  //https://cms.kriva.tech/api/lapl-technology-page?populate[technologies][populate]=*&populate[seo][populate]=*
  static async getTechnologyPageData() {
    const params = {
      "populate[technologies][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-technology-page", {
      params,
    });
  }
  //https://cms.kriva.tech/api/lapl-industry-pages?populate[hero][populate]=*&[populate][details][populate]=*&[populate][clients][populate][images][populate]=*&[populate][services][populate][services][populate][image][populate]=*&[populate][differ_section][populate][services][populate][image][populate]=*&populate[cases][populate][lapl_case_study_collections][populate]=*&[populate][lapl__custom_software][populate][services][populate][image][populate]=*&[populate][faq][populate]=*&populate[seo][populate]=*
  static async getIndustryPageData(slug: string) {
    const params = {
      "populate[hero][populate]": "*",
      "populate[details][populate]": "*",
      "populate[clients][populate][images][populate]": "*",
      "populate[services][populate][services][populate][image][populate]": "*",
      "populate[differ_section][populate][services][populate][image][populate]":
        "*",
      "populate[cases][populate][lapl_case_study_collections][populate]": "*",
      "populate[lapl__custom_software][populate][services][populate][image][populate]":
        "*",
      "populate[faq][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-industry-pages", {
      params,
    });
  }
  //https://cms.kriva.tech/api/lapl-industry-menu?populate[lapl_industries][populate]=*&populate[seo][populate]=*
  static async getIndustryMenuData() {
    try {
      const params = {
        "populate[lapl_industries][populate]": "*",
        "populate[seo][populate]": "*",
      };
      return ApiService.strapiRequestGetDataFromCMS("lapl-industry-menu", {
        params,
      });
    } catch (error) {
      console.error("Error fetching industry menu data:", error);
      return { data: null };
    }
  }


  //https://cms.kriva.tech/api/lapal-carrers-page?populate[hero_section]=*&populate[lapl_job_categories][populate][lapl_job_listings][populate]=*
  static async getCareersPageData() {
    const params = {
      "populate[hero_section]": "*",
      "populate[lapl_job_categories][populate][lapl_job_listings][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapal-carrers-page", { params });
  }

  //https://cms.kriva.tech/api/lapl-career-details?populate=*
  static async getCareerDetailsData() {
    // Use a simpler populate approach to avoid field name issues
    const params = {
      "populate": "*"
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-career-details", { params });
  }

  //https://cms.kriva.tech/api/lapl-web-sections?populate[button_contact][populate]=*&[populate][Trusted_Companies][populate]=*&[populate][Explore_Services][populate][models][populate]=*&[populate][OurCore_Values][populate][models][populate]=*&[populate][Leading_Solutions][populate][models][populate]=*&[populate][DetailsList][populate]=*&[populate][Benifits_Section][populate]=*&[populate][FAQ_details][populate]=*&[populate][hero_section][populate]=*&populate[seo][populate]=*
  static async getTechnologySlugs() {
    try {
      const response = await ApiService.strapiRequestGetDataFromCMS(
        `lapl-web-sections`
      );
      const responseData = response as { data: { slug_id: string }[] };
      return responseData.data.map(item => ({ slug: item.slug_id }));
    } catch (error) {
      console.error("Error fetching technology slugs:", error);
      return [];
    }
  }
  //https://cms.kriva.tech/api/lapl-lp2s?populate[hero][populate]=*&populate[ultraHD][populate][lapl_ultra_hd_collections][populate]=*&populate[effective_team][populate][chips][populate]=*&populate[effective_team][populate][card][populate]=*&&populate[effective_team][populate][technologies][populate]=*&populate[stats][populate]=*&populate[think_easy][populate][steps][populate]=*&populate[faq][populate][card][populate]=*&populate[faq][populate][faq][populate]=*&populate[bolg][populate][blog_card][populate]=*
  static async getLp2sData() {
    const params = {
      "populate[hero][populate]": "*",
      "populate[ultraHD][populate][lapl_ultra_hd_collections][populate]": "*",
      "populate[effective_team][populate][chips][populate]": "*",
      "populate[effective_team][populate][card][populate]": "*",
      "populate[effective_team][populate][technologies][populate]": "*",
      "populate[stats][populate]": "*",
      "populate[think_easy][populate][steps][populate]": "*",
      "populate[faq][populate][card][populate]": "*",
      "populate[faq][populate][faq][populate]": "*",
      "populate[bolg][populate][blog_card][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-lp2s", { params });
  }
  //https://cms.kriva.tech/api/lapl-lp4s?populate[hero][populate]=*&populate[technologies][populate][technologies][populate]=*&populate[it_solutions][populate][lapl_landing_page_3_collections][populate]=*&populate[custom_services][populate]=*&populate[stats][populate]=*&populate[core_values][populate]=*&populate[it_services][populate]=*&populate[how_it_works][populate][cards][populate]=*&populate[looking_to_speak][populate]=*&populate[blog][populate][cards][populate]=*
  static async getLp4sData() {
    const params = {
      "populate[hero][populate]": "*",
      "populate[technologies][populate][technologies][populate]": "*",
      "populate[it_solutions][populate][lapl_landing_page_3_collections][populate]": "*",
      "populate[custom_services][populate]": "*",
      "populate[stats][populate]": "*",
      "populate[core_values][populate]": "*",
      "populate[it_services][populate]": "*",
      "populate[how_it_works][populate][cards][populate]": "*",
      "populate[looking_to_speak][populate]": "*",
      "populate[blog][populate][cards][populate]": "*",
      "populate[seo][populate]": "*",
    };
    return ApiService.strapiRequestGetDataFromCMS("lapl-lp4s", { params });
  }

 //https://cms.kriva.tech/api/lapl-lp5s?populate[hero][populate]=*&populate[performance_service][populate]=*&populate[enduring_value][populate][consultancy_tab_section][populate]=*&populate[enduring_value][populate][buttons][populate]=*&populate[lapl_landing_page_4_collections][populate]=*&populate[developers][populate][images][populate]=*&populate[blog1][populate][blog_cards][populate]=*&populate[recent_work][populate][cards][populate]=*&populate[why_choose_us][populate]=*&populate[faq][populate]=*
 static async getLp5sData() {
  const params = {
    "populate[hero][populate]": "*",
    "populate[lapl_landing_page_4_collections][populate]": "*",
    "populate[performance_service][populate]": "*",
    "populate[enduring_value][populate][consultancy_tab_section][populate]": "*",
    "populate[enduring_value][populate][buttons][populate]": "*",
    "populate[developers][populate][images][populate]": "*",
    "populate[blog1][populate][blog_cards][populate]": "*",
    "populate[recent_work][populate][cards][populate]": "*",
    "populate[why_choose_us][populate]": "*",
    "populate[faq][populate]": "*",
    "populate[seo][populate]": "*",
  };
  return ApiService.strapiRequestGetDataFromCMS("lapl-lp5s", { params });
}
//https://cms.kriva.tech/api/lapl-lp3s?populate[hero][populate]=*&populate[great_companies][populate][images][populate]=*&populate[service_features][populate][lapl_landing_page_2_collections][populate]=*&populate[service_features][populate][buttons][populate]=*&populate[stats][populate]=*&populate[solutions][populate]=*&populate[stand_out][populate][faq][populate]=*&populate[stand_out][populate][right_side_cards][populate]=*&populate[faq][populate][faq][populate]=*&populate[blog2][populate][cards][populate]=*
static async getLp3sData() {
  const params = {
    "populate[hero][populate]": "*",
    "populate[seo][populate]": "*",
    "populate[great_companies][populate][images][populate]": "*",
    "populate[service_features][populate][lapl_landing_page_2_collections][populate]": "*",
    "populate[service_features][populate][buttons][populate]": "*",
    "populate[stats][populate]": "*",
    "populate[solutions][populate]": "*",
    "populate[stand_out][populate][faq][populate]": "*",
    "populate[stand_out][populate][right_side_cards][populate]": "*",
    "populate[faq][populate][faq][populate]": "*",
    "populate[blog2][populate][cards][populate]": "*",
  };
  return ApiService.strapiRequestGetDataFromCMS("lapl-lp3s", { params });
}
//https://cms.kriva.tech/api/lapl-lp1s?populate[hero][populate]=*&populate[features][populate][cards][populate]=*&populate[seo][populate]=*&populate[scalable_business][populate]=*&populate[powerful_agency][populate]=*&populate[services][populate][lapl_landing_page_5_collections][populate]=*
static async getLp1sData() {
  const params = {
    "populate[hero][populate]": "*",
    "populate[features][populate][cards][populate]": "*",
    "populate[seo][populate]": "*",
    "populate[scalable_business][populate]": "*",
    "populate[powerful_agency][populate]": "*",
    "populate[services][populate][lapl_landing_page_5_collections][populate]": "*",
    "populate[blog][populate][blog_cards][populate]": "*",
  };
  return ApiService.strapiRequestGetDataFromCMS("lapl-lp1s", { params });
}


}

