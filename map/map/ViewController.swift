//
//  ViewController.swift
//  map
//
//  Created by Ming Qiu on 6/30/17.
//  Copyright © 2017 Ming Qiu. All rights reserved.
//

import UIKit
import GoogleMaps
import GooglePlaces

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        // Create a GMSCameraPosition that tells the map to display the

        let camera = GMSCameraPosition.camera(withLatitude: 38.53, longitude: -121.73, zoom: 13)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        mapView.isMyLocationEnabled = true
        view = mapView
        
        // Creates a marker in the center of the map.
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: 38.53, longitude: -121.73)
        marker.title = "Davis"
        marker.snippet = "USA"
        marker.map = mapView
    }

}

