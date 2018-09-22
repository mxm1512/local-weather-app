import { registerLocaleData } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import localeDe from '@angular/common/locales/de'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'

registerLocaleData(localeDe)
@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
