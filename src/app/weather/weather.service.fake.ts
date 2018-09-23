import { BehaviorSubject, Observable, of } from 'rxjs'
import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private current: ICurrentWeather = {
    city: 'Wuppertal',
    country: 'DE',
    date: 1485789600,
    image: '',
    temperature: 72,
    description: 'sunny',
  }

  currentWeather = new BehaviorSubject<ICurrentWeather>({
    city: '--',
    country: '--',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  })
  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.current)
  }
}
