<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false
files:
  fields:
    imageposition:
      label: Position
      type: select
      default: center
      required: true
      options:
        left: Left
        center: Center
        right: Right
fields:
  text:
    label: Manifesto
    type:  textarea
  issuefront:
    label: Issue Front
    type: image
    width: 1/2
  issueback:
    label: Issue Back
    type: image
    width: 1/2
  issuefront2:
    label: Issue Front 2
    type: image
    width: 1/2
  issueback2:
    label: Issue Back 2
    type: image
    width: 1/2
  gallery:
    label: Image Gallery
    type: gallery
  contributors:
    label: Contributors
    type:  textarea
  stockists:
    label: Stockists
    type:  textarea
  buylink:
    label: Buy link
    type: url
  contact:
    label: Contact
    type: textarea
