#define BLYNK_AUTH_TOKEN  "XXXXXXXXXXXXXXXXXXXXXXXX"
#define BLYNK_PRINT Serial
#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>
#include <ESP32Servo.h>

Servo servo;

char auth[] = BLYNK_AUTH_TOKEN;

char ssid[] = "XXXXXXXXXXXXXXXXX";
char pass[] = "XXXXXXXXXXXXXXXXX";

#define PANELVOLTAGE A4 
#define BATTERYVOLTAGE A5 

int panel_voltage;
int battery_voltage;

float panelvolt = 0.0;
float batteryvolt = 0.0;
float R1 = 30000.0;
float R2 = 7500.0;
float in1_volt = 0;
float in2_volt = 0;

void setup()
{
Serial.begin(115200);
Blynk.begin(auth, ssid, pass);
servo.attach(25);
}

void loop()
{
panel_voltage = analogRead(PANELVOLTAGE);
panelvolt = (panel_voltage*3.3)/4095;
in1_volt = panelvolt/(R2/(R1+R2))+0.60;
Serial.println(in1_volt);

battery_voltage = analogRead(BATTERYVOLTAGE);
batteryvolt = (battery_voltage*3.3)/4095;
in2_volt = batteryvolt/(R2/(R1+R2))+0.60;
Serial.println(in2_volt);

Blynk.virtualWrite(V1, in1_volt);
Blynk.virtualWrite(V3, in2_volt);

Blynk.run();
delay(1000);
}
BLYNK_WRITE(V5)
{
servo.write(param.asInt());
}
