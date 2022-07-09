import Header from "../../components/Header/index";
import "./style.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [jobName, setJobName] = useState("");

  const [is_show_search_box, set_is_show_search_box] = useState(false);

  return (
    <div className="home">
      <Header />
      <section className="website-description-section">
        {/* Start Overloay */}
        <div className="overlay d-flex justify-content-center align-items-center text-white">
          {/* Start Search Box */}
          {is_show_search_box && <div className="top-search-box">
            <div className="container">
              <form className="top-search-form">
                <input type="text"
                  value={jobName}
                  placeholder="أدخل المسمى الوظيفي الذي تريد البحث عنه ."
                  className="form-control p-3"
                  onChange={(e) => setJobName(e.target.value)}
                />
              </form>
              <Link to="/login" className="btn btn-success advanced-search-btn ps-4 pe-4">بحث متقدم</Link>
            </div>
          </div>}

          {/* End Search Box */}
          <div className="introduction">
            <h1 className="mb-4">مرحباً بك في موقع التوظيف الخاص بنا .</h1>
            <h4 className="d-flex align-items-center justify-content-center mb-5">
              <span className="border-bottom p-3 border-3">ابحث عن الوظيفة المناسبة لك عن طريقنا بسهولة</span>
              <i className="fa fa-heart me-2"></i>
            </h4>
            <form className="search-form">
              <input type="text"
                value={jobName}
                placeholder="أدخل المسمى الوظيفي الذي تريد البحث عنه ."
                className="form-control p-3"
                onChange={(e) => { setJobName(e.target.value); set_is_show_search_box(true) }}
              />
            </form>
          </div>
        </div>
        {/* End Overloay */}
      </section>
    </div>
  );
}

export default Home;