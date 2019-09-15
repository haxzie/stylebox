import React from 'react'
import styles from './styles.module.scss'
import Container from '../Container';
import { Row, Expand } from '../Layout';
import GitHubLogo from '../../images/github-logo.svg';


function Header() {
    return (
        <Container>
            <div style={{ padding: "25px 15px" }}>
                <Row>
                    <h1 style={{
                        fontSize: "1.5em",
                        fontWeight: "normal"
                    }}>StyleBox</h1>
                    <Expand/>
                    <a href="https://github.com/haxzie/stylebox"><img src={GitHubLogo} className={styles.navIcon} /></a>
                </Row>
            </div>
        </Container>
    )
}

export default Header
