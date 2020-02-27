import Types from "../utils/types";

const initialState = {
  Interstitial: {
    shownAds: 0
  },
  rewarded: {
    shownAds: 0,
    rewardedAds: 0
  },
  native: {
    shownAds: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.INCREMENT_REWARDED_ADS:
      return {
        ...state,
        rewarded: {
          ...state.rewarded,
          rewardedAds: state.rewarded.rewardedAds + 1
        }
      };
    case Types.INCREMENT_REWARDED_SHOWN_ADS:
      return {
        ...state,
        rewarded: {
          ...state.rewarded,
          shownAds: state.rewarded.shownAds + 1
        }
      };
    case Types.INCREMENT_NATIVE:
      return {
        ...state,
        native: {
          shownAds: state.native.shownAds + 1
        }
      };
    case Types.INCREMENT_INTERSITIAL:
      return {
        ...state,
        Interstitial: {
          shownAds: state.Interstitial.shownAds + 1
        }
      };
    default:
      return state;
  }
};
