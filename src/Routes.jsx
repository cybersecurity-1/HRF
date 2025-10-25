import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here\
import AdminDashboard from "pages/admin/AdminDashboard";
import Homepage from "pages/homepage";
import ProjectGallery from "pages/project-gallery";
import ServiceDetailModal from "pages/service-detail-modal";
import ContactInformationPage from "pages/contact-information-page";
import QuoteRequestForm from "pages/quote-request-form";
import ServicesPage from "pages/services";
import NotFound from "pages/NotFound";
import GalleryPage from "pages/GalleryPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
  {/* <Route path="/project-gallery" element={<ProjectGallery />} /> */}
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-detail-modal" element={<ServiceDetailModal />} />
        <Route path="/contact-information-page" element={<ContactInformationPage />} />
        <Route path="/quote-request-form" element={<QuoteRequestForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;