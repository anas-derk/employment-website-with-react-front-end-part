import Header from "../../../components/Header/index";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login pt-4 pb-4">
      <Header />
      {/* Start Container */}
      <div className="container">
        <h4 className="border p-3 border-success border-2">مرحباً بك في صفحة تسجيل الدخول .</h4>
        <hr />
        <h5 className="mb-5 mt-4 text-center border border-2 border-secondary pt-3 pb-3">تسجيل الدخول .</h5>
        <form style={{ boxShadow: "1px 1px 10px green" }} className="p-4 login-form">
          {/* Start Input Field Box */}
          <div className="input-field-box mb-5">
            {/* Start Grid System */}
            <div className="row align-items-center text-center">
              {/* Start Column */}
              <div className="col-md-2">
                <label htmlFor="#email">البريد الالكتروني *</label>
              </div>
              {/* End Column */}
              {/* Start Column */}
              <div className="col-md-10">
                <input type="text" id="email" placeholder="من فضلك أدخل البريد الالكتروني الخاص بك هنا" className="form-control border-success border-2" required />
              </div>
              {/* End Column */}
            </div>
            {/* End Grid System */}
          </div>
          {/* End Input Field Box */}
          {/* Start Input Field Box */}
          <div className="input-field-box mb-5">
            {/* Start Grid System */}
            <div className="row align-items-center text-center">
              {/* Start Column */}
              <div className="col-md-2">
                <label htmlFor="#password">كلمة المرور *</label>
              </div>
              {/* End Column */}
              {/* Start Column */}
              <div className="col-md-10">
                <input type="text" id="password" placeholder="من فضلك أدخل كلمة السر التي تريدها هنا" className="form-control border-success border-2" required />
              </div>
              {/* End Column */}
            </div>
            {/* End Grid System */}
          </div>
          {/* End Input Field Box */}
          <button className="btn btn-success mx-auto d-block mb-4">
            <i className="fas fa-sign-in-alt"></i>
            <span className="me-2">تسجيل الدخول الآن</span>
          </button>
          <div className="go-login-page-box text-center mb-2">
            <span className="ms-2">ليس لديك حساب ؟ إذن قم</span>
            <Link to="/sign-up">بإنشاء حساب الآن .</Link>
          </div>
        </form>
      </div>
      {/* End Container */}
    </div>
  );
}

export default Login;