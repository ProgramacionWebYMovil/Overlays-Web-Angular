

export function setTextData(data: object,pageContent:object) {
  pageContent = data as (typeof pageContent);
  return pageContent;
}
