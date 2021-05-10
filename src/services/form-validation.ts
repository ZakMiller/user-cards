const FormRules = {
  email: [
    (v: string) => !!v || "E-mail is required",
    (v: string) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "E-mail must be valid",
  ],
  website: [
    (v: string) => !!v || "Website required",
    (v: string) =>
      /^(http:\/\/|https:\/\/)?([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z0-9][A-Za-z0-9-]*$/.test(
        v
      ) || "Website must be valid",
  ],
  name: [(v: string) => !!v || "Name required"],
  address: {
    street: [(v: string) => !!v || "Street address required"],
    city: [(v: string) => !!v || "City required"],
    zipcode: [
      (v: string) => !!v || "Zip code required",
      (v: string) =>
        /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v) || "Zip code must be valid",
    ],
  },
  company: {
    name: [(v: string) => !!v || "Name required"],
    catchPhrase: [(v: string) => !!v || "Catch phrase required"],
    bs: [(v: string) => !!v || "BS required"],
  },
  phone: [
    (v: string) => !!v || "Phone required",
    (v: string) =>
      /(^\(\d{3}\) \d{3}-\d{4}$)|(^\(\d{3}\) \d{3}-\d{4} x\d+$)/.test(v) ||
      "Phone number must be valid",
  ],
  username: [(v: string) => !!v || "Username required"],
};
export default FormRules;
