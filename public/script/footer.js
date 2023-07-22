const creatFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <div class="logo-footer"><h1>ECOMMERCE</h1></div>
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Woman</li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
        </ul>
    </div>
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Man</li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
        </ul>
    </div>
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Kid</li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
            <li><a href="#" class="footer-link">test</a></li>
        </ul>
    </div>
</div>
<p class="footer-info">support emails - help@clothing.com, customersupport@clothing.com <br> telephone - 180 00 00 001, 180 00 00 002</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
    `
}

creatFooter();