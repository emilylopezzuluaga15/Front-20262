import { NavLink } from 'react-router-dom';

const links = [
    { to: '/', label: 'Dashboard', end: true },
    { to: '/students', label: 'Students' },
    { to: '/courses', label: 'Courses' },
    { to: '/enrollments', label: 'Enrollments' },
];

function Slidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <span className="sidebar__eyebrow">SGC</span>
                <h2>Panel basico</h2>
            </div>

            <nav className="sidebar__nav" aria-label="Main navigation">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        className={({ isActive }) =>
                            isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Slidebar;
