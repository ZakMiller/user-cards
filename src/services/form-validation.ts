const FormRules = {
  email: [
    (v: string) => !!v || "E-mail is required",
    (v: string) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "E-mail must be valid",
  ],
  name: [(v: string) => !!v || "Name required"],
  address: {
    street: [(v: string) => !!v || "Street address required"],
    city: [(v: string) => !!v || "City required"],
    zipcode: [(v: string) => !!v || "Zip code required"],
  },
  company: {
    name: [(v: string) => !!v || "Name required"],
    catchPhrase: [(v: string) => !!v || "Catch phrase required"],
    bs: [(v: string) => !!v || "BS required"],
  },
  //   phone: [(v: string)] =>
};
export default FormRules;
