import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 78vh;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <OuterContainer>
      <h1>الصفحة غير موجودة 404</h1>
      <p>قد تكون دخلت الرابط بالخطأ أو أن الرابط قد تغيّر. لا عليك.. ارجع إلى الرئيسية أو المدونة لتجد  ما تريد</p>
    </OuterContainer>
  </Layout>
)

export default NotFoundPage
