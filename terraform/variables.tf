locals {
    labels = {
        "data-project" = var.data-project
    }
}

variable "project" {
    type= string
    description = "synthapse"
}

variable "region" {
    type= string
    description = "europe-central2"
}

variable  "data-project" {
    type = string
    description = "Name of data pipeline project to use as resource prefix"
}