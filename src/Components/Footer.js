import React from "react";
import '../Styles/Footer.css'
function Footer() {
  return (
  
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Team Members</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Weifeng
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Linxin
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Brandon
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">School</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Job postings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    News and articles
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <i class="fas fa-phone"></i>+123 456 789
                  </span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-star"></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="row text-center">
            <div class="col-md-4 box">
              <span class="copyright quick-links">
                Copyright &copy; Your Website{" "}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box">
              <ul class="list-inline quick-links">
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
   
  );
}

export default Footer;
