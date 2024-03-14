const Footer = () => {
    
    let today = new Date();
    return(
        <footer>
            <h1>Team Member Allocation - {today.getFullYear()}</h1>
        </footer>
    )

}

export default Footer;