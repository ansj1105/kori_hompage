import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

import { HomePage } from "./pages/HomePage";
import { EcosystemPage } from "./pages/EcosystemPage";
import { KorionPayPage } from "./pages/KorionPayPage";
import { TokenomicsPage } from "./pages/TokenomicsPage";
import { DevelopersPage } from "./pages/DevelopersPage";
import { DevelopersApiPage } from "./pages/DevelopersApiPage";
import { DevelopersSdkPage } from "./pages/DevelopersSdkPage";
import { DevelopersAuthenticationPage } from "./pages/DevelopersAuthenticationPage";
import { DevelopersWebhooksPage } from "./pages/DevelopersWebhooksPage";
import { DevelopersErrorsPage } from "./pages/DevelopersErrorsPage";
import { DevelopersSandboxPage } from "./pages/DevelopersSandboxPage";
import { DevelopersExamplesPage } from "./pages/DevelopersExamplesPage";
import { DevelopersRateLimitsPage } from "./pages/DevelopersRateLimitsPage";
import { DevelopersPartnersPage } from "./pages/DevelopersPartnersPage";
import { DevelopersChangelogPage } from "./pages/DevelopersChangelogPage";
import { DevelopersPreregisterPage } from "./pages/DevelopersPreregisterPage";
import { DevelopersLayout } from "./pages/developers/DevelopersLayout";

import { RoadmapPage } from "./pages/RoadmapPage";
import { SupportPage } from "./pages/SupportPage";
import { TeamSection } from "./pages/TeamSection";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DownloadPage } from "./pages/DownloadPage";
import WhitepaperPage from "./pages/WhitepaperPage";
import { FoxyyaPage } from "./pages/FoxyyaPage";
import { MiningPage } from "./pages/MiningPage";
import { AboutPage } from "./pages/AboutPage";
import { FoundationPage } from "./pages/FoundationPage";
import { TreasuryPage } from "./pages/TreasuryPage";
import { PolicyPage } from "./pages/PolicyPage";
import { NewsPage } from "./pages/NewsPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { SmartContractPage } from "./pages/SmartContractPage";
import { MediaKitPage } from "./pages/MediaKitPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { ListingInfoPage } from "./pages/ListingInfoPage";
import { ExplorerPage } from './pages/ExplorerPage';

import {


  SecurityPage,

  
} from "./pages/ExtraPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },

      { path: "ecosystem", Component: EcosystemPage },
      { path: "technology", Component: KorionPayPage },
      { path: "korionpay", Component: KorionPayPage },

      { path: "about", Component: AboutPage },
      { path: "foundation", Component: FoundationPage },
      { path: "treasury", Component: TreasuryPage },
      { path: "policy", Component: PolicyPage },

      { path: "SmartContract", Component: SmartContractPage },
      { path: "smart-contract", Component: SmartContractPage },

      { path: "news", Component: NewsPage },
      { path: "news/:slug", Component: NewsDetailPage },

      { path: "tokenomics", Component: TokenomicsPage },
      { path: "roadmap", Component: RoadmapPage },
      { path: "support", Component: SupportPage },
      { path: "team", Component: TeamSection },
      { path: "download", Component: DownloadPage },

      { path: "foxyya", Component: FoxyyaPage },
      { path: "mining", Component: MiningPage },

      { path: "media-kit", Component: MediaKitPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "explorer", Component: ExplorerPage },
      { path: "listing-info", Component: ListingInfoPage },
      { path: "security", Component: SecurityPage },

      {
        path: "developers",
        Component: DevelopersLayout,
        children: [
          { index: true, Component: DevelopersPage },
          { path: "api", Component: DevelopersApiPage },
          { path: "sdk", Component: DevelopersSdkPage },
          { path: "authentication", Component: DevelopersAuthenticationPage },
          { path: "webhooks", Component: DevelopersWebhooksPage },
          { path: "errors", Component: DevelopersErrorsPage },
          { path: "sandbox", Component: DevelopersSandboxPage },
          { path: "examples", Component: DevelopersExamplesPage },
          { path: "rate-limits", Component: DevelopersRateLimitsPage },
          { path: "partners", Component: DevelopersPartnersPage },
          { path: "changelog", Component: DevelopersChangelogPage },
          { path: "preregister", Component: DevelopersPreregisterPage },
        ],
      },
    ],
  },

  // Layout 바깥으로 분리
  {
    path: "/whitepaper",
    Component: WhitepaperPage,
  },

  // 전체 404
  {
    path: "*",
    Component: NotFoundPage,
  },
]);