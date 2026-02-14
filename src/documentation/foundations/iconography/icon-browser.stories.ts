import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Bioma 2.0/Foundations/Iconography',
  parameters: {
    docs: {
      description: {
        component: 'Biblioteca de iconos Material Symbols. Busca, explora y copia nombres de iconos para usar en tus componentes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Lista de iconos más comunes de Material Symbols
const commonIcons = [
  // Navegación
  'home', 'menu', 'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward',
  'chevron_left', 'chevron_right', 'expand_more', 'expand_less', 'close', 'navigate_next',
  'navigate_before', 'first_page', 'last_page', 'unfold_more', 'keyboard_arrow_down',
  'keyboard_arrow_up', 'keyboard_arrow_left', 'keyboard_arrow_right',

  // Acciones
  'add', 'remove', 'edit', 'delete', 'save', 'search', 'filter_list', 'sort',
  'refresh', 'sync', 'undo', 'redo', 'content_copy', 'content_paste', 'download',
  'upload', 'share', 'print', 'open_in_new', 'launch', 'drag_indicator',

  // Archivos y Carpetas
  'folder', 'folder_open', 'insert_drive_file', 'description', 'article',
  'attach_file', 'cloud_upload', 'cloud_download', 'cloud_done', 'file_upload',
  'file_download',

  // Comunicación
  'mail', 'inbox', 'send', 'drafts', 'mark_email_read', 'mark_email_unread',
  'chat', 'comment', 'forum', 'feedback', 'message', 'notifications',
  'notifications_active', 'notifications_off', 'phone', 'call', 'videocam',

  // Usuario y Cuenta
  'person', 'account_circle', 'person_add', 'person_remove', 'group', 'badge',
  'supervisor_account', 'admin_panel_settings', 'manage_accounts', 'logout',
  'login', 'lock', 'lock_open', 'vpn_key', 'security',

  // Estado y Feedback
  'check', 'check_circle', 'cancel', 'error', 'warning', 'info', 'help',
  'done', 'done_all', 'thumb_up', 'thumb_down', 'star', 'star_border',
  'favorite', 'favorite_border', 'bookmark', 'bookmark_border',

  // Configuración y Control
  'settings', 'tune', 'build', 'dashboard', 'widgets', 'view_list', 'view_module',
  'view_column', 'view_quilt', 'grid_view', 'list', 'table_view',

  // Medios
  'play_arrow', 'pause', 'stop', 'skip_next', 'skip_previous', 'replay',
  'volume_up', 'volume_down', 'volume_off', 'mic', 'mic_off', 'image',
  'photo', 'photo_camera', 'video_library', 'movie',

  // E-commerce
  'shopping_cart', 'shopping_bag', 'add_shopping_cart', 'remove_shopping_cart',
  'storefront', 'store', 'local_shipping', 'payment', 'credit_card',
  'attach_money', 'monetization_on',

  // Fecha y Tiempo
  'event', 'calendar_today', 'schedule', 'access_time', 'timer', 'alarm',
  'watch_later', 'history', 'update', 'today',

  // Ubicación
  'location_on', 'place', 'map', 'my_location', 'navigation', 'near_me',
  'explore', 'directions', 'local_cafe', 'restaurant',

  // Más Usados
  'more_vert', 'more_horiz', 'apps', 'drag_handle', 'fullscreen', 'fullscreen_exit',
  'zoom_in', 'zoom_out', 'aspect_ratio', 'fit_screen', 'crop', 'rotate_right',
  'rotate_left', 'flip', 'straighten', 'palette', 'color_lens', 'invert_colors',

  // Visibilidad
  'visibility', 'visibility_off', 'remove_red_eye', 'preview',

  // Toggle
  'toggle_on', 'toggle_off', 'radio_button_checked', 'radio_button_unchecked',
  'check_box', 'check_box_outline_blank', 'indeterminate_check_box',
];

export const IconBrowser: Story = {
  render: () => ({
    template: `
      <div style="font-family: Sora, sans-serif; padding: 24px; max-width: 1400px; margin: 0 auto;">
        <!-- Header -->
        <div style="margin-bottom: 32px;">
          <h2 style="margin: 0 0 8px 0; font-size: 32px; font-weight: 700; color: var(--text-strong);">
            Material Symbols
          </h2>
          <p style="margin: 0 0 16px 0; font-size: 16px; color: var(--text-secondary);">
            Busca y explora más de 2,500 iconos. Haz clic en cualquier icono para copiar su nombre.
          </p>
          <a
            href="https://fonts.google.com/icons"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: inline-flex;
              align-items: center;
              gap: 8px;
              color: var(--brand-500);
              text-decoration: none;
              font-weight: 500;
              font-size: 14px;
            ">
            Ver colección completa en Google Fonts
            <span class="material-symbols-rounded" style="font-size: 18px;">open_in_new</span>
          </a>
        </div>

        <!-- Search Bar -->
        <div style="margin-bottom: 32px;">
          <div style="position: relative; max-width: 600px;">
            <input
              id="iconSearch"
              type="text"
              placeholder="Buscar iconos... (ej: home, search, user)"
              style="
                width: 100%;
                padding: 12px 16px 12px 48px;
                font-size: 16px;
                font-family: Sora, sans-serif;
                border: 2px solid var(--border-default);
                border-radius: 8px;
                outline: none;
                transition: border-color 0.2s;
                box-sizing: border-box;
              "
              onkeyup="filterIcons(this.value)"
              onfocus="this.style.borderColor='var(--brand-500)'"
              onblur="this.style.borderColor='var(--border-default)'"
            />
            <span
              class="material-symbols-rounded"
              style="
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--text-muted);
                font-size: 20px;
                pointer-events: none;
              ">
              search
            </span>
          </div>
          <div
            id="searchResults"
            style="
              margin-top: 12px;
              font-size: 14px;
              color: var(--text-secondary);
            ">
            Mostrando ${commonIcons.length} iconos comunes
          </div>
        </div>

        <!-- Toast Notification -->
        <div
          id="copyToast"
          style="
            position: fixed;
            bottom: 32px;
            right: 32px;
            background: var(--neutral-950);
            color: var(--neutral-white);
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            pointer-events: none;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
          ">
          <span class="material-symbols-rounded" style="font-size: 18px;">check_circle</span>
          <span id="toastMessage">Nombre copiado al portapapeles</span>
        </div>

        <!-- Usage Instructions -->
        <div style="
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 32px;
        ">
          <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: var(--text-primary);">
            💡 Cómo usar los iconos
          </h3>
          <ol style="margin: 0; padding-left: 20px; color: var(--text-secondary); font-size: 14px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              Haz clic en cualquier icono para copiar su nombre
            </li>
            <li style="margin-bottom: 8px;">
              Usa el componente <code style="
                background: var(--bg-muted);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: monospace;
                font-size: 13px;
              ">bio-icon-font</code> con el nombre del icono:
            </li>
          </ol>
          <pre style="
            background: var(--neutral-950);
            color: var(--neutral-white);
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 12px 0 0 0;
            font-size: 13px;
            line-height: 1.5;
          "><code>&lt;bio-icon-font
  iconName="home"
  size="24"
  type="rounded"
  color="default"
&gt;&lt;/bio-icon-font&gt;</code></pre>
        </div>

        <!-- Icons Grid -->
        <div
          id="iconsGrid"
          style="
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 8px;
          ">
          ${commonIcons.map(icon => `
            <button
              class="icon-card"
              data-icon-name="${icon}"
              onclick="copyIconName('${icon}')"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px 12px;
                background: var(--bg-default);
                border: 1px solid var(--border-subtle);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                min-height: 100px;
              "
              onmouseover="
                this.style.background='var(--bg-subtle)';
                this.style.borderColor='var(--brand-500)';
                this.style.transform='translateY(-2px)';
                this.style.boxShadow='var(--shadow-md)';
              "
              onmouseout="
                this.style.background='var(--bg-default)';
                this.style.borderColor='var(--border-subtle)';
                this.style.transform='translateY(0)';
                this.style.boxShadow='none';
              "
            >
              <span
                class="material-symbols-rounded"
                style="
                  font-size: 32px;
                  color: var(--text-primary);
                  margin-bottom: 8px;
                ">
                ${icon}
              </span>
              <span style="
                font-size: 12px;
                color: var(--text-secondary);
                text-align: center;
                word-break: break-word;
                line-height: 1.3;
              ">
                ${icon}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- No Results Message -->
        <div
          id="noResults"
          style="
            display: none;
            text-align: center;
            padding: 48px 24px;
            color: var(--text-secondary);
          ">
          <span class="material-symbols-rounded" style="font-size: 48px; opacity: 0.3; display: block; margin-bottom: 16px;">
            search_off
          </span>
          <p style="margin: 0; font-size: 16px;">
            No se encontraron iconos
          </p>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Intenta con otro término de búsqueda
          </p>
        </div>

        <script>
          // Filter icons based on search
          function filterIcons(searchTerm) {
            const term = searchTerm.toLowerCase().trim();
            const cards = document.querySelectorAll('.icon-card');
            const noResults = document.getElementById('noResults');
            const searchResults = document.getElementById('searchResults');
            let visibleCount = 0;

            cards.forEach(card => {
              const iconName = card.getAttribute('data-icon-name');
              const matches = iconName.includes(term);
              card.style.display = matches ? 'flex' : 'none';
              if (matches) visibleCount++;
            });

            // Show/hide no results message
            if (visibleCount === 0 && term !== '') {
              noResults.style.display = 'block';
              searchResults.textContent = 'No se encontraron resultados';
            } else {
              noResults.style.display = 'none';
              if (term === '') {
                searchResults.textContent = 'Mostrando ${commonIcons.length} iconos comunes';
              } else {
                searchResults.textContent = \`Se encontraron \${visibleCount} iconos\`;
              }
            }
          }

          // Copy icon name to clipboard
          function copyIconName(iconName) {
            // Create temporary input
            const tempInput = document.createElement('input');
            tempInput.value = iconName;
            document.body.appendChild(tempInput);
            tempInput.select();

            try {
              document.execCommand('copy');
              showToast(iconName);
            } catch (err) {
              console.error('Error al copiar:', err);
            }

            document.body.removeChild(tempInput);
          }

          // Show toast notification
          function showToast(iconName) {
            const toast = document.getElementById('copyToast');
            const message = document.getElementById('toastMessage');

            message.textContent = \`"\${iconName}" copiado al portapapeles\`;

            // Show toast
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';

            // Hide after 2 seconds
            setTimeout(() => {
              toast.style.opacity = '0';
              toast.style.transform = 'translateY(20px)';
            }, 2000);
          }

          // Focus search on key press
          document.addEventListener('keydown', (e) => {
            const searchInput = document.getElementById('iconSearch');
            const isTyping = document.activeElement.tagName === 'INPUT';

            // Focus search on any letter/number key (except if already typing)
            if (!isTyping && e.key.length === 1 && /[a-zA-Z0-9]/.test(e.key)) {
              searchInput.focus();
            }

            // Clear search on Escape
            if (e.key === 'Escape' && isTyping) {
              searchInput.value = '';
              filterIcons('');
              searchInput.blur();
            }
          });
        </script>
      </div>
    `,
  }),
};

export const IconSizes: Story = {
  render: () => ({
    template: `
      <div style="font-family: Sora, sans-serif; padding: 24px;">
        <h3 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Tamaños Disponibles</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">16px</div>
            <span class="material-symbols-rounded" style="font-size: 16px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="16"</code>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">20px</div>
            <span class="material-symbols-rounded" style="font-size: 20px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="20"</code>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">24px</div>
            <span class="material-symbols-rounded" style="font-size: 24px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="24"</code>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">32px</div>
            <span class="material-symbols-rounded" style="font-size: 32px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="32"</code>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">40px</div>
            <span class="material-symbols-rounded" style="font-size: 40px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="40"</code>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; color: var(--text-secondary); font-size: 14px;">48px</div>
            <span class="material-symbols-rounded" style="font-size: 48px;">favorite</span>
            <code style="
              background: var(--bg-subtle);
              padding: 4px 8px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
            ">size="48"</code>
          </div>
        </div>
      </div>
    `,
  }),
};

export const IconStyles: Story = {
  render: () => ({
    template: `
      <div style="font-family: Sora, sans-serif; padding: 24px;">
        <h3 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Estilos: Rounded vs Filled</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px; max-width: 800px;">
          <!-- Rounded -->
          <div>
            <h4 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: var(--text-primary);">
              Rounded (Outline)
            </h4>
            <p style="margin-bottom: 16px; color: var(--text-secondary); font-size: 14px;">
              Estilo por defecto. Líneas suaves y redondeadas.
            </p>
            <code style="
              display: block;
              background: var(--bg-subtle);
              padding: 8px 12px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
              margin-bottom: 16px;
            ">type="rounded"</code>
            <div style="display: flex; flex-wrap: wrap; gap: 16px;">
              <span class="material-symbols-rounded" style="font-size: 32px;">home</span>
              <span class="material-symbols-rounded" style="font-size: 32px;">favorite</span>
              <span class="material-symbols-rounded" style="font-size: 32px;">star</span>
              <span class="material-symbols-rounded" style="font-size: 32px;">settings</span>
              <span class="material-symbols-rounded" style="font-size: 32px;">notifications</span>
            </div>
          </div>

          <!-- Filled -->
          <div>
            <h4 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: var(--text-primary);">
              Filled (Solid)
            </h4>
            <p style="margin-bottom: 16px; color: var(--text-secondary); font-size: 14px;">
              Estilo sólido. Mayor énfasis visual.
            </p>
            <code style="
              display: block;
              background: var(--bg-subtle);
              padding: 8px 12px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 12px;
              margin-bottom: 16px;
            ">type="filled"</code>
            <div style="display: flex; flex-wrap: wrap; gap: 16px;">
              <span class="material-symbols-rounded" style="font-size: 32px; font-variation-settings: 'FILL' 1;">home</span>
              <span class="material-symbols-rounded" style="font-size: 32px; font-variation-settings: 'FILL' 1;">favorite</span>
              <span class="material-symbols-rounded" style="font-size: 32px; font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-rounded" style="font-size: 32px; font-variation-settings: 'FILL' 1;">settings</span>
              <span class="material-symbols-rounded" style="font-size: 32px; font-variation-settings: 'FILL' 1;">notifications</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
