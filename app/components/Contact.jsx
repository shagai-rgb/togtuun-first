import BirthdayInvitation from "./birthday-invitation";

export default function Contact() {
  return (
    <section id="contact">
      <div className=" flex items-center justify-center relative  ">
        <img
          className="h-screen w-screen object-cover     "
          src="./images/contactbg.png"
          alt="Cupcakes image"
        />{" "}
        <div className=" max-w-2xl w-10/12 rounded-3xl font-roboto  grid gap-8 absolute  ">
          <BirthdayInvitation
            name="Togtuun"
            date="2025:02:09"
            time="15:00-20:00"
            location="УДХТ90, BZD - 36 khoroo, Ulaanbaatar 13311"
            phoneNumber="80509830"
            age={1}
          />
        </div>
      </div>
    </section>
  );
}
