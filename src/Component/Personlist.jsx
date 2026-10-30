import { useState } from 'react'
import dev from '../assets/dev.svg'
import sale from '../assets/sales.svg'
import marketing from '../assets/marketing.svg'

function Personlist() {
  const [data] = useState([
    { id: 1, name: "Wongsathon", age: 20, position: "Frontend Developer" },
    { id: 2, name: "Tatar", age: 21, position: "Backend Developer" },
    { id: 3, name: "Nong", age: 22, position: "Marketing" },
    { id: 4, name: "Kitkat", age: 23, position: "Sales" },
  ])

  const [hide, setHide] = useState(true)

  const getImage = (position) => {
    if (position.includes('Developer')) return dev
    if (position.includes('Sales')) return sale
    if (position.includes('Marketing')) return marketing

    return dev
  }

  return (
    <section className="team-section" id="team" aria-labelledby="team-title">
      <div className="team-heading">
        <div className="team-heading-copy">
          <span className="eyebrow">PEOPLESPACE / TEAM</span>
          <h2 id="team-title">ทีมของเรา</h2>
          <p className="section-description">รู้จักผู้คนที่อยู่เบื้องหลังทุกไอเดียและผลงาน</p>
        </div>
        <div className="team-actions">
          <span className="member-count">
            <span className="member-count-number">{data.length}</span>
            <span>สมาชิก</span>
          </span>
          <button
            className="btn btn-outline-primary team-toggle"
            type="button"
            onClick={() => setHide((currentHide) => !currentHide)}
            aria-expanded={hide}
            aria-controls="team-member-list"
          >
            {hide ? 'ซ่อนรายชื่อ' : 'แสดงรายชื่อ'}
          </button>
        </div>
      </div>

      <div className="team-overview card border-0">
        <div className="team-overview-copy">
          <span className="team-overview-label">
            <span className="team-overview-dot" aria-hidden="true" />
            ทีมพร้อมสร้างสรรค์
          </span>
          <h3>คนเก่งหลากหลาย รวมเป็นทีมเดียวกัน</h3>
          <p>ทำความรู้จักสมาชิกและความเชี่ยวชาญของแต่ละคนในทีม</p>
        </div>
        <div className="team-overview-stats" aria-label="ภาพรวมทีม">
          <div>
            <strong>{data.length}</strong>
            <span>สมาชิก</span>
          </div>
          <span className="team-overview-divider" aria-hidden="true" />
          <div>
            <strong>03</strong>
            <span>สายงาน</span>
          </div>
        </div>
      </div>

      {hide && (
        <ul className="row g-3 employee-grid" id="team-member-list">
          {data.map((employee, index) => (
            <li className="col-12 col-sm-6 col-lg-3" key={employee.id}>
              <article className="card h-100 employee-card">
                <div className="card-body">
                  <div className="employee-card-top">
                    <img
                      className={`employee-avatar employee-avatar-${index + 1}`}
                      src={getImage(employee.position)}
                      alt=""
                      width="68"
                      height="68"
                    />
                    <span className="employee-team-mark" aria-hidden="true">
                      {employee.position.includes('Developer')
                        ? 'DEV'
                        : employee.position === 'Marketing'
                          ? 'MKT'
                          : 'SLS'}
                    </span>
                  </div>
                  <div className="employee-info">
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                  </div>
                  <div className="employee-card-footer">
                    <span>อายุ {employee.age} ปี</span>
                    <span className="employee-card-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Personlist