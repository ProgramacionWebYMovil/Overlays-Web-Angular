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
  logged_option4?:string,
  prices_title?:string,
  language?:string
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



// SESSION INTERFACES
interface ListSession{
  type:string,
  label:string,
  for:string

}

interface OnChange{
  button:string,
  text:string
}

export interface Session{
  title_login?:string,
  title_signup?:string,
  input_list?:Array<ListSession>,
  submit_login?:string,
  submit_signup?:string,
  change_login?:OnChange,
  change_signup?:OnChange
}

export interface Prices{
  h1_title?:string,
  titulo2?:string,
  plan1_title?:string,
  plan1_money?:string,
  plan1_moreInfo?:string,
  plan1_icon1?:string,
  plan1_feature1?:string,
  plan1_icon2?:string,
  plan1_feature2?:string,
  plan1_icon3?:string,
  plan1_feature3?:string,
  plan2_title?:string,
  plan2_money?:string,
  plan2_moreInfo?:string,
  plan2_icon1?:string,
  plan2_feature1?:string,
  plan2_icon2?:string,
  plan2_feature2?:string,
  plan2_icon3?:string,
  plan2_feature3?:string,
  button_purchase?:string
}

export interface Payment {
  h1_payment?:string,
  cardholder_name?:string,
  card_number?:string,
  card_expiry?:string,
  card_cvc?:string,
  card_check?:string,
  pay?:string
}

export interface Howtouse {
  title_howToUse?:string,
  introduction_howToUse?:string,
  type1?:string,
  description1?:string,
  type2?:string,
  description2?:string
}

export interface MyOverlays{
  title?:string,
  messageNoOverlays?:string
}

export interface User {
  userName?: string;
  userEmail?: string;
}

