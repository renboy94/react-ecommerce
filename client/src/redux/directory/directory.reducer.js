export const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/12150819_59FIFTY_CHARARMORCARNAGESCARLET_CARNAGE_SCA_3QR.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "hoodies",
      imageUrl:
        "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-hoodspdfllzpcost-1-productimagenowatermark.jpg",
      id: 2,
      linkUrl: "shop/hoodies"
    },
    {
      title: "accessories",
      imageUrl:
        "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-ringglglsymstl-1-productimagenowatermark.jpg",
      id: 3,
      linkUrl: "shop/accessories"
    },
    {
      title: "t-shirts",
      imageUrl:
        "https://mmv2api.s3-us-east-2.amazonaws.com/products/images/BM2934-AT.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/t-shirts"
    },
    {
      title: "toys",
      imageUrl:
        "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-111087-1-productimagenowatermark.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/toys"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
