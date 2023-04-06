export interface Header {
  title?:string,
  dropmenu_basketball? :string,
  dropmenu_football?:string,
  dropmenu_others?:string,
  dropmenu_padel?:string,
  dropmenu_tennis?:string,
  dropmenu_title?:string,
  howToUse?:string,
  logged_option0?:string,
  logged_option1?:string,
  logged_option2?:string,
  logged_option3?:string,
  prices_title?:string,
}

export interface Footer  {

  title_explore?:string,
  text_overlays?:string,
  text_howToUse?:string,
  text_home?:string,
  text_pricing?:string,

  //Follow section
  title_follow?:string,
  text_instagram?:string,
  text_youtube?:string,
  text_tiktok?:string,
  text_facebook?:string,

  //Form section
  title_form?:string,
  text_email?:string,
  text_name?:string,
  text_message?:string
}

export interface Index {
  section1_h1?:string,
    section1_h2?:string,
    section2_h2?:string,
    section2_p?:string,
    section3_h2?:string,
    section3_h3_1?:string,
    section3_p_1?:string,
    section3_h3_2?:string,
    section3_p_2?:string,
    section3_h3_3?:string,
    section3_p_3?:string,
    section3_h3_4?:string,
    section3_p_4?:string,
    section4_h2?:string,
    section4_h3_1?:string,
    section4_p_1?:string,
    section4_h3_2?:string,
    section4_p_2?:string,
    section4_h3_3?:string,
    section4_p_3?:string,
    section5_h2?:string,
    section6_h2?:string,
}


interface ListSession{
  type:string,
  label:string,
  for:string

}
export interface Session{
  title_login?:string,
  title_signup?:string,
  input_list?:Array<ListSession>
}
