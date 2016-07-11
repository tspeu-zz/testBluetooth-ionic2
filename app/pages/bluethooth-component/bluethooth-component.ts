import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {BluetoothSerial} from  'ionic-native';


@Component({
  templateUrl: 'build/pages/bluethooth-component/bluethooth-component.html',
})
export class BluethoothComponentPage implements OnInit{

  constructor(private nav: NavController) {
//,private bluetoothSerial : BluetoothSerial
  }

 //

 	ngOnInit(){
 		//this.bluetoothSerial.connect(macAddress_or_uuid, connectSuccess, connectFailure);
 	
 	
 	/*	BluetoothSerial.startScan([]).subscribe(device => {
			this.devices.push(device);
			});
*/

		BluetoothSerial.available();
		BluetoothSerial.isConnected();
		BluetoothSerial.isEnabled();
		BluetoothSerial.enable();
		BluetoothSerial.showBluetoothSettings();
 	}
}
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 * ```ts
 * // Write a string
 * Bluetooth.write("hello world").then(success, failure);
 *
 * // Array of int or bytes
 * Bluetooth.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * Bluetooth.write(data).then(success, failure);
 *
 * // Array Buffer
 * Bluetooth.write(data.buffer).then(success, failure);
 * ```
 */