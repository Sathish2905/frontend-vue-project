import { defineStore } from 'pinia';
import type { User, Role } from '@/types';
import { api } from '@/services/api';

interface AuthState {
  user: User | null;
  roles: Role[];
  isAuthenticated: boolean;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    roles: [],
    isAuthenticated: false,
    token: null,
  }),

  getters: {
    isAdmin(): boolean {
      return this.roles.some(role => role.role_name === 'admin');
    },
    
    userFullName(): string {
      if (!this.user) return '';
      return `${this.user.first_name || ''} ${this.user.last_name || ''}`.trim();
    }
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await api.post('/auth/login', { email, password });
        this.token = response.data.token;
        if (this.token) {
          localStorage.setItem('token', this.token);
        }
        this.user = response.data.user;
        this.roles = response.data.roles;
        this.isAuthenticated = true;
      } catch (error) {
        throw error;
      }
    },

    async logout() {
      this.user = null;
      this.roles = [];
      this.isAuthenticated = false;
      this.token = null;
      localStorage.removeItem('token');
    },

    async checkAuth() {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      try {
        const response = await api.get('/auth/me');
        this.user = response.data.user;
        this.roles = response.data.roles;
        this.isAuthenticated = true;
        this.token = token;
      } catch (error) {
        this.logout();
      }
    }
  }
}); 