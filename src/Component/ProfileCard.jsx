function ProfileCard({ name, age, onIncreaseAge, onDecreaseAge, onChangeName }) {
  const initials = name.slice(0, 1).toUpperCase()

  return (
    <section className="profile-card" id="profile" aria-labelledby="profile-title">
      <div className="profile-copy">
        <span className="eyebrow">ยินดีต้อนรับกลับมา</span>
        <h1 id="profile-title">สวัสดี, {name}</h1>
        <p>จัดการโปรไฟล์และติดตามข้อมูลของคุณได้ที่นี่</p>

        <div className="profile-actions">
          <button className="button button-primary" type="button" onClick={onChangeName}>
            เปลี่ยนชื่อโปรไฟล์
            <span aria-hidden="true">→</span>
          </button>
          <span className="profile-hint">โปรไฟล์ส่วนตัวของคุณ</span>
        </div>
      </div>

      <div className="profile-summary">
        <div className="avatar" aria-hidden="true">{initials}</div>
        <div className="summary-label">อายุ</div>
        <div className="age-value">
          <strong>{age}</strong>
          <span>ปี</span>
        </div>
        <div className="age-controls" aria-label="ปรับอายุ">
          <button className="button button-quiet" type="button" onClick={onDecreaseAge} aria-label="ลดอายุ">
            −
          </button>
          <button className="button button-quiet" type="button" onClick={onIncreaseAge} aria-label="เพิ่มอายุ">
            +
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard
