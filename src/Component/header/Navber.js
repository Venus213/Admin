import { CheckSquareOutlined, GiftOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

export const Navber = () => {
  return (
    <div >
      {/* Top Bar Start */}
      <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="top-bar-left"></div>
            </div>
            <div className="col-md-6">
              <div className="top-bar-right">
                <div className="social">
                  <a href="/signup">
                    <UserOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}
    </div>
  )
}
