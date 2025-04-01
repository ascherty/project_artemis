import contactsImage from "../assets/contacts.jpg";
import PageTemplate from "../components/PageTemplate.tsx";

function Contacts() {
    return <PageTemplate
        title="Contact Us"
        subTitle="Get in touch with us to discuss your project!"
        image={contactsImage}
        altText="Contacts" />;
}

export default Contacts;