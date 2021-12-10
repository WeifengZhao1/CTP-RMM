import React from "react";
import '../Styles/Footer.css'
function Footer() {
  return (
  
/*       <footer>
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
      </footer> */
    <footer>

    
      <div className = "main-footer">
        <div className = "container">
          <div className = "row">
            {/* Column 1 */}
            <div className = "col">
              <h4>Team Null</h4>
              <ul className = "list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/weifeng-zhao/" className="name">Weifeng Zhao</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/linxinjiang/" className="name">Linxin Jiang</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/torres-brandon/" className="name">Brandon Torres</a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className = "col">
              <h4>About Us</h4>
              <ul className = "list-unstyled">
                <li>
                <a href="https://www.qc.cuny.edu/Pages/home.aspx" className="name">Queens College | Senior</a>
                </li>
          
                <li>
                <a href="http://www.brooklyn.cuny.edu/web/home.php" className="name">Brooklyn College | Junior</a>
                </li>
                <li>
                <a href="https://www.csi.cuny.edu/" className="name"> College of Staten Island | Senior</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className = "col">
              <h4>Support From</h4>
              <ul className = "list-unstyled">
                <li>
                <a href="https://cunytechprep.nyc/" className="name"> CUNY Tech Prep</a>
                </li>
                <li>
                <a href="https://cunytechprep.nyc/staff.html" className="name">  Edgardo Molina</a>
                </li>
                <li>
                <a href="https://cunytechprep.nyc/staff.html" className="name">  Silu Hu</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <p className="col-sm" className="copyRight">
              &copy;{new Date().getFullYear()} TEAM NULL | All right reserved | Terms Of Serivce | Privacy
            </p>
          </div>

        </div>
      </div>
   
    </footer>
  );
}

export default Footer;
