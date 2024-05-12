/*
  WavePoint -1.0

  Rfid card writer

  ----------------------- He Who Controls the spice, controls the universe -----------------
*/
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 mfrc522(SS_PIN, RST_PIN);

// Define the data to write to the card (16 bytes)
byte dataToWrite[] = {
  0x68, 0x74, 0x74, 0x70, 0x73, 0x3A, 0x2F, 0x2F, // URL: https://
  0x35, 0x63, 0x36, 0x37, 0x2D, 0x31, 0x30, 0x36, // 5c67-106
  0x2D, 0x35, 0x31, 0x2D, 0x38, 0x32, 0x2D, 0x31, // -51-82-1
  0x31, 0x38, 0x2E, 0x6E, 0x67, 0x72, 0x6F, 0x6B, // 18.ngrok
  0x2D, 0x66, 0x72, 0x65, 0x65, 0x2E, 0x61, 0x70, // -free.app
  0x70, 0x2F                                       // /
};

void setup() {
  Serial.begin(9600);
  SPI.begin();
  mfrc522.PCD_Init();
}

void loop() {

  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  
  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  // Authenticate using default key
  MFRC522::MIFARE_Key key;
  byte sector = 1; 

  
  byte defaultKey[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};


  for (byte i = 0; i < 6; i++) {
      key.keyByte[i] = defaultKey[i];
  }


  MFRC522::StatusCode status = mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, sector, &key, &(mfrc522.uid));
  if (status != MFRC522::STATUS_OK) {
    Serial.println("Authentication failed");
    return;
  }


  status = mfrc522.MIFARE_Write(4 * sector, dataToWrite, sizeof(dataToWrite));
  if (status != MFRC522::STATUS_OK) {
    Serial.println("Write failed");
  } else {
    Serial.println("Write success");
  }


  mfrc522.PICC_HaltA();

 // release card
  mfrc522.PCD_StopCrypto1();
}
