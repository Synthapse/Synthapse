terraform {
    backend "gcs" { 
      bucket  = "synthapse-landing"
      prefix  = "prod"
    }
}

provider "google" {
  project = var.project
  region = var.region
}