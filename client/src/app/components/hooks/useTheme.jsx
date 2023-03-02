const useTheme = (status) => {
    return status
        ? {
              bg: "bg-primary",
              btnColor: "btn-primary",
              btnInBagColor: "btn-warning",
              bgBagIcon: "bg-warning",
              btnOutlineColor: "btn-outline-primary"
          }
        : {
              bg: "bg-dark",
              btnColor: "btn-dark",
              btnInBagColor: "btn-success",
              bgBagIcon: "bg-success",
              btnOutlineColor: "btn-outline-dark"
          };
};

export default useTheme;
