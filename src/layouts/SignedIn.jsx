import React from 'react'
import { Dropdown, Menu ,Image } from  'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://digitalage.com.tr/wp-content/uploads/2014/05/Yandexin-g%C3%B6rsel-ile-g%C3%B6rsel-arama-%C3%B6zelli%C4%9Fi-hizmetinizde.jpg"></Image>
            <Dropdown pointing="top left" text='Uğur Türk'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="arrow alternate circle left"/>

                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

    </div>
  )
}
