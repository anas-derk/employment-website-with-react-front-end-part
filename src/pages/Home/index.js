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
                  <li className="mb-3">إذا كنت قد ضغطت على زر البحث المتقدم ، حدد التفاصيل للمسمى الوظيفي الذي تريد البحث عنه ثمّ اضغط زر البحث ، ثمّ انتظر ريثما يتم جلب النتائج المطابقة .</li>
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
      {/* Start Why Are We The Best Section */}
      <section className="why-are-we-the-best pt-5 pb-5 text-center bg-success text-white">
        {/* Start Container */}
        <div className="container">
          <h3 className="mb-5">لماذا نحن الخيار الأفضل لك ؟</h3>
          {/* Start Grid System */}
          <div className="row">
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box mb-5">
                <h3 className="mx-auto mb-4 rounded-circle">1</h3>
                <h4 className="mb-4">إبحث عن الموظف الذي تريده بسهولة</h4>
                <p>من خلال نظام الإقتراحات الخاص بنا سوف يظهر لديك الأشخاص المناسبين للشاغر الوظيفي الذي تنشره .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box mb-5">
                <h3 className="mx-auto mb-4 rounded-circle">2</h3>
                <h4 className="mb-4">إبحث عن الوظيفة التي تريدها بسهولة</h4>
                <p>من خلال نظام الإقتراحات الخاص بنا سوف تظهر لديك الوظائف المناسبة لك بناءً على معلوماتك الشخصية .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box mb-5">
                <h3 className="mx-auto mb-4 rounded-circle">3</h3>
                <h4 className="mb-4">غير ملزم أبداً بإنشاء بريد الكتروني</h4>
                <p>إذا لم تكن من هواة استخدام البريد الالكتروني أو لا تعلم كيف تستخدمه  من أجل إرسال سيرتك الذاتية لصاحب العمل ، لا بأس فأنت لست بحاجة لاستخدام أي شيء خارج موقع التوظيف الخاص بنا ، لأن عملية التوظيف كاملة من الألف للياء تتم من خلال موقعنا بدءاً من إيجاد الوظيفة المناسبة لك وانتهاءً بحصولك على الوظيفة المطلوبة .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box mb-5">
                <h3 className="mx-auto mb-4 rounded-circle">4</h3>
                <h4 className="mb-4">أسلوب الحصول على الوظيفة بسيط للغاية</h4>
                <p>إذا كنت تبحث عن عمل فليس من الضرورة أن تنشئ سيرة ذاتية ( CV ) بصيغة PDF وأن تضطر لتعديلها كل مرة عندما تتعلم مهارة جديدة وذلك بفضل نظامنا الخاص الذي يمكنك من أن ترسل طلب توظيف لصاحب العمل وعندها يمكنه الدخول لصفحتك الشخصية ورؤية معلوماتك الكاملة ، والذي يمكنك أيضاً من التواصل المباشر معه بسهولة .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box">
                <h3 className="mx-auto mb-4 rounded-circle">5</h3>
                <h4 className="mb-4">أجور رمزية لقاء خدماتنا</h4>
                <p>إذا كنت مستثمراً أو شركة فلن تدفع إلا أجور رمزية لقاء خدمة نشر الوظيفة لدينا .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
            {/* Start Column */}
            <div className="col-md-6">
              {/* Start Feature Box */}
              <div className="feature-box">
                <h3 className="mx-auto mb-4 rounded-circle">6</h3>
                <h4 className="mb-4">إمكانية التواصل بين الموظف وصاحب العمل وعمل مقابلات العمل</h4>
                <p>من خلال خدمة التواصل الاجتماعي ، يمكن لصاحب العمل والباحث عن فرصة عمل التواصل معاً بسهولة .</p>
              </div>
              {/* End Feature Box */}
            </div>
            {/* End Column */}
          </div>
          {/* End Grid System */}
        </div>
        {/* End Container */}
      </section>
      {/* End Why Are We The Best Section */}
    </div>
  );
}

export default Home;