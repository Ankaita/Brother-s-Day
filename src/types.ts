/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Scene = 'intro' | 'envelope' | 'letter';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  type: 'heart' | 'star' | 'petal';
}
