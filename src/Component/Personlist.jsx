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
      <div className="section-heading">
        <div>
          <span className="eyebrow">ทีมของเรา</span>
          <h2 id="team-title">รายชื่อพนักงาน</h2>
          <p className="section-description">รู้จักผู้คนที่อยู่เบื้องหลังทีมของเรา</p>
        </div>
        <div className="team-actions">
          <span className="member-count">{data.length} คน</span>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => setHide(!hide)}
            aria-expanded={hide}
          >
            {hide ? 'ซ่อนรายชื่อ' : 'แสดงรายชื่อ'}
          </button>
        </div>
      </div>

      {hide && (
        <ul className="employee-grid">
          {data.map((employee) => (
            <li className="employee-card" key={employee.id}>
              <img
                className="employee-avatar"
                src={getImage(employee.position)}
                alt=""
                width="56"
                height="56"
              />
              <div className="employee-info">
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
                <span>อายุ {employee.age} ปี</span>
              </div>
              <span className="employee-indicator" aria-hidden="true" />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Personlist