import Header from "../../components/Header/index";
import "./style.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [jobName, setJobName] = useState("");

  const [is_show_search_box, set_is_show_search_box] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="home">
      <Header />
      {/* Start Website Description Section */}
      <section className="website-description">
        {/* Start Overloay */}
        <div className="overlay d-flex justify-content-center align-items-center text-white">
          {/* Start Search Box */}
          {is_show_search_box && <div className="top-search-box">
            <div className="container">
              <form className="top-search-form" onSubmit={handleSubmit}>
                <input type="text"
                  value={jobName}
                  placeholder="أدخل المسمى الوظيفي الذي تريد البحث عنه ."
                  className="form-control p-3"
                  onChange={(e) => setJobName(e.target.value)}
                />
                <button className="btn btn-info ps-4 pe-4 normal-search-btn">بحث عادي</button>
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
            <form className="search-form" onSubmit={handleSubmit}>
              <input type="text"
                value={jobName}
                placeholder="أدخل المسمى الوظيفي الذي تريد البحث عنه ."
                className="form-control p-3"
                onChange={(e) => { setJobName(e.target.value); set_is_show_search_box(true); }}
              />
            </form>
          </div>
        </div>
        {/* End Overloay */}
      </section>
      {/* End Website Description Section */}
      {/* Start How Website Work Section */}
      <section className="how-website-work pt-5 pb-5">
        {/* Start Container */}
        <div className="container">
          <h3 className="text-center mb-5">كيف تتعامل مع موقع التوظيف الخاص بنا ؟</h3>
          {/* Start Grid System */}
          <div className="row">
            {/* Start Column */}
            <div className="col-md">
              {/* Start Use Learn Box */}
              <div className="use-learn-box p-3">
                <h6 className="border-bottom border-success pb-3 border-2 mb-3">بالنسبة للمستخدم العادي ( الذي يريد البحث عن فرصة عمل ) :</h6>
                <p>عليك اتباع الخطوات التالية :</p>
                {/* Start Manipulation Steps List With Website */}
                <ol className="manipulation-steps-list-with-website">
                  <li className="mb-3">
                    <span>قم بالاشتراك ( المجاني ) عن طريق الرابط الآتي : </span>
                    <Link to="/sign-up">إشتراك الآن .</Link>
                  </li>
                  <li className="mb-3">اكتب المسمى الوظيفي الذي تريد البحث عنه في حقل الإدخال أعلاه ثمّ اضغط على زر بحث عادي أو اضغط على زر بحث متقدم إذا أردت البحث بتفاصيل أكثر .</li>
                  <li className="mb-3">إذا كنت قد ضغطت زر البحث المتقدم ، حدد التفاصيل للمسمى الوظيفي الذي تريد البحث عنه ثمّ اضغط زر البحث ، ثمّ انتظر ريثما يتم جلب النتائج المطابقة .</li>
                  <li className="mb-3">إذا كنت قد ضغطت زر البحث العادي ، عندها انتظر قليلاً ريثما يتم جلب النتائج المطابقة .</li>
                  <li className="mb-3">في حال كانت هنالك وظائف مطابقة للمعلومات التي حددتها ، قم  باختيار الوظيفة التي تريد التقدم لها .</li>
                  <li className="mb-3">الآن أنت جاهز للتقدم للوظيفة ، اضغط على زر التقديم الآن  </li>
                  <li className="mb-3">أدخل المعلومات المطلوبة ثم ّ اضغط على زر تقديم الآن .</li>
                  <li>إذا ظهرت لديك رسالة: " تهانينا ، لقد تمّت عملية التقدم على الوظيفة بنجاح " ، عندها أنت تكون قد انتهيت من عملية التقديم ، وعليك أن تنتظر من الشركة أو المستثمر التواصل معك عبر موقعنا الالكتروني بالضغط على زر الوظائف التي تقدمت عليها في رأس الصفحة  ( سيتم إرسال طلب توظيف تلقائي إلى الشركة أو المستثمر ) . </li>
                </ol>
                {/* End Manipulation Steps List With Website */}
              </div>
              {/* End Use Learn Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md">
              {/* Start Use Learn Box */}
              <div className="use-learn-box p-3">
                <h6 className="border-bottom border-success pb-3 border-2 mb-3">بالنسبة للمستخدم المتقدم ( الذي يريد أن ينشر فرصة عمل ) :</h6>
                <p>عليك اتباع الخطوات التالية :</p>
                {/* Start Manipulation Steps List With Website */}
                <ol className="manipulation-steps-list-with-website">
                  <li className="mb-3">
                    <span>قم بالاشتراك ( المجاني ) عن طريق الرابط الآتي : </span>
                    <Link to="/sign-up">إشتراك الآن .</Link>
                  </li>
                  <li className="mb-3">إذا أردت نشر فرصة عمل ، ببساطة يمكنك الضغط على زر نشر وظيفة الموجود في رأس الصفحة .</li>
                  <li className="mb-3">أدخل تفاصيل الوظيفة التي تريد نشرها بالكامل .</li>
                  <li className="mb-3">إضغط على زر  نشر الآن .</li>
                  <li className="mb-3">قم بعملية الدفع لقاء الخدمة .</li>
                  <li className="mb-3">انتظر ريثما تتم عملية الدفع بنجاح .</li>
                  <li className="mb-3">أخيراً انتظر قليلاً ريثما يتم نشر الوظيفة .</li>
                  <li className="mb-3">إذا ظهرت لديك الرسالة التالية: " تهانينا لقد تمت عملية نشر الوظيفة بنجاح " عندها تكون العملية تمت بنجاح .</li>
                  <li className="mb-3">الآن يمكنك الضغط على زر الوظائف التي نشرتها لمعرفة من تقدم للوظيفة وللتواصل معه .</li>
                  <li>عندما تجد الموظف المطلوب وتواصلت معه بإمكانك حذف الشاغر الوظيفي عن طريق الضغط على زر حذف الوظيفة .</li>
                </ol>
                {/* End Manipulation Steps List With Website */}
              </div>
              {/* End Use Learn Box */}
            </div>
            {/* End Column */}
          </div>
          {/* End Grid System */}
        </div>
        {/* End Container */}
      </section>
      {/* End How Website Work Section */}
    </div>
  );
}

export default Home;