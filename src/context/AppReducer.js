export default (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: [action.payload, ...state.wishlist],
        };
        case "REMOVE_FROM_WISHLIST":
          return {
            ...state,
            wishlist: state.wishlist.filter(
              (result) => result.volumeInfo.title !== action.payload
            ),
          };
        default:
            return state;
        }
      };