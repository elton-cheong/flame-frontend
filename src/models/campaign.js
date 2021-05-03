export default class Campaign {
    constructor(campaignId, brandId, title, description, createDate, status) {
      this.campaignId = campaignId;
      this.brandId = brandId;
      this.title = title;
      this.description = description;
      this.createDate = createDate;
      this.status = status;
    }
  }