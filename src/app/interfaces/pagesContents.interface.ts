export interface Header {
  dropmenu_basketball? :string,
  dropmenu_football?:string,
  dropmenu_others?:string,
  dropmenu_padel?:string,
  dropmenu_tennis?:string,
  dropmenu_title?:string,
  howToUse?:string,
  logged_options?:Array<string>,
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
