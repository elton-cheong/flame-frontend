export default class CampaignDetails {
    constructor(campaignId, cashValue, productValue, guideline, requirements, 
        campaignStartDate, campaignEndDate,
        applicationStartDate, applicationEndDate, 
        submissionStartDate, submissionEndDate,
        bannerImage, imagegGuide1, imageGuide2, imageGuide3) {
      this.campaignId = campaignId;
      this.cashValue = cashValue;
      this.productValue = productValue;
      this.guideline = guideline;
      this.requirements = requirements;
      this.campaignStartDate = campaignStartDate;
      this.campaignEndDate = campaignEndDate;
      this.applicationStartDate = applicationStartDate;
      this.applicationEndDate = applicationEndDate;
      this.submissionStartDate = submissionStartDate;
      this.submissionEndDate = submissionEndDate;
      this.bannerImage = bannerImage;
      this.imagegGuide1 = imagegGuide1;
      this.imageGuide2 = imageGuide2;
      this.imageGuide3 = imageGuide3;
    }
  }